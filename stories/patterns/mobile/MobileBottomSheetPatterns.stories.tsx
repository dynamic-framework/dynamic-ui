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
        border: '1px solid var(--bs-gray-200)',
        overflow: 'hidden',
        background: 'var(--bs-gray-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="d-flex justify-content-center py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--bs-gray-300)',
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
          <h5 className="mb-0 fw-semibold">{payload.accountName}</h5>
          <small className="text-muted">
            Available balance:
            {' '}
            {payload.balance}
          </small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-2">
        <DButton text="Transfer money" className="w-100" variant="soft" />
        <DButton text="Pay credit card" className="w-100" variant="soft" />
        <DButton text="Deposit check" className="w-100" variant="soft" />
        <DButton text="View statement" className="w-100" variant="soft" />
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
      <div className="p-4 d-flex flex-column h-100">
        <div className="mb-4">
          <small className="text-muted">Main account</small>
          <h3 className="mb-0">$12,847.90</h3>
        </div>

        <div className="card p-3 mb-3">
          <small className="text-muted">Card ending in 4532</small>
          <strong>Credit used: $1,235.00</strong>
        </div>

        <div className="mt-auto">
          <DButton
            className="w-100"
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
        border: '1px solid var(--bs-gray-200)',
        overflow: 'hidden',
        background: 'var(--bs-gray-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="d-flex justify-content-center py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--bs-gray-300)',
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
          <h5 className="mb-0 fw-semibold">{payload.accountName}</h5>
          <small className="text-muted">Available balance: {payload.balance}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-2">
        <DButton text="Transfer money" className="w-100" variant="soft" />
        <DButton text="Pay credit card" className="w-100" variant="soft" />
        <DButton text="Deposit check" className="w-100" variant="soft" />
        <DButton text="View statement" className="w-100" variant="soft" />
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
      <div className="p-4 d-flex flex-column h-100">
        <div className="mb-4">
          <small className="text-muted">Main account</small>
          <h3 className="mb-0">$12,847.90</h3>
        </div>
        <div className="card p-3 mb-3">
          <small className="text-muted">Card ending in 4532</small>
          <strong>Credit used: $1,235.00</strong>
        </div>
        <div className="mt-auto">
          <DButton
            className="w-100"
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
        <h5 className="mb-0 fw-semibold">Review transfer</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <DListGroup>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Recipient</span>
            <strong>{payload.recipient}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Amount</span>
            <strong>
              $
              {payload.amount.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Amount</span>
            <strong>
              $
              {payload.amount.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Fee</span>
            <strong>
              $
              {fee.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Total debit</span>
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
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-1">New transfer</h5>
        <small className="text-muted mb-4">From checking account</small>

        <div className="card p-3 mb-3">
          <small className="text-muted">To</small>
          <strong>Sarah Mitchell</strong>
        </div>

        <div className="card p-3 mb-3">
          <small className="text-muted">Amount</small>
          <strong>$245.00</strong>
        </div>

        <div className="mt-auto d-flex flex-column gap-2">
          <DButton
            className="w-100"
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
    <div className="d-flex justify-content-center py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--bs-gray-300)' }} />
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
        <h5 className="mb-0 fw-semibold">Review transfer</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <DListGroup>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Recipient</span>
            <strong>{payload.recipient}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Amount</span>
            <strong>\${payload.amount.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Fee</span>
            <strong>\${fee.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Total debit</span>
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
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-1">New transfer</h5>
        <small className="text-muted mb-4">From checking account</small>
        <div className="card p-3 mb-3">
          <small className="text-muted">To</small>
          <strong>Sarah Mitchell</strong>
        </div>
        <div className="card p-3 mb-3">
          <small className="text-muted">Amount</small>
          <strong>$245.00</strong>
        </div>
        <div className="mt-auto d-flex flex-column gap-2">
          <DButton
            className="w-100"
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
          <h5 className="mb-0 fw-semibold">{payload.cardLabel}</h5>
          <small className="text-muted">
            Card ending in
            {' '}
            {payload.cardLast4}
          </small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-3">
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
        <DButton text="Replace card" variant="outline" color="danger" className="w-100 mt-2" />
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
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-3">Cards</h5>

        <div className="card p-3 mb-3 bg-primary text-white">
          <small className="opacity-75">Platinum card</small>
          <h6 className="mb-0">•••• •••• •••• 4532</h6>
        </div>

        <div className="mt-auto">
          <DButton
            className="w-100"
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
    <div className="d-flex justify-content-center py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--bs-gray-300)' }} />
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
          <h5 className="mb-0 fw-semibold">{payload.cardLabel}</h5>
          <small className="text-muted">Card ending in {payload.cardLast4}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-3">
        <DInputSwitch id="freeze-card-switch" label="Freeze card" checked={isFrozen} onChange={setIsFrozen} />
        <DInputSwitch id="online-payments-switch" label="Online payments" checked={onlinePayments} onChange={setOnlinePayments} />
        <DButton text="Replace card" variant="outline" color="danger" className="w-100 mt-2" />
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
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-3">Cards</h5>
        <div className="card p-3 mb-3 bg-primary text-white">
          <small className="opacity-75">Platinum card</small>
          <h6 className="mb-0">•••• •••• •••• 4532</h6>
        </div>
        <div className="mt-auto">
          <DButton
            className="w-100"
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
