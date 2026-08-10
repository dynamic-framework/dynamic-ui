import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { useState } from 'react';

import {
  DAlert,
  DBadge,
  DBox,
  DButton,
  DContextProvider,
  DIcon,
  DInputPin,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
  useOtp,
} from '../../../src';

import DocsTemplate from '../docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Mobile/OTP',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `Mobile-first uses of the headless \`useOtp\` hook: a bottom sheet
verification flow (e.g. authorizing a bank transfer) and a fullscreen
lock/unlock confirmation screen with a large countdown and remaining-attempts
feedback. Both rely on the same \`useOtp\` state/behavior used by the desktop
\`Patterns/OTP\` stories, just wired to mobile-specific layouts.

Open each example in its own Storybook canvas:

- [Bottom sheet verification](?path=/story/patterns-mobile-otp--bottom-sheet-otp)
- [Fullscreen card lock confirmation](?path=/story/patterns-mobile-otp--fullscreen-card-lock)
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

function simulateVerify(code: string, validCode = '1234', delay = 800) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (code === validCode) {
        resolve();
      } else {
        reject(new Error('The code you entered is incorrect.'));
      }
    }, delay);
  });
}

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

// ---------------------------------------------------------------------------
// 1. OTP inside a bottom sheet (transfer authorization)
// ---------------------------------------------------------------------------

const bottomSheetStyle = {
  height: '60vh',
  maxHeight: '60vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

type TransferOtpPayloads = {
  transferOtp: {
    recipient: string;
    amount: string;
  };
};

function TransferOtpSheet({ name, payload }: PortalProps<TransferOtpPayloads['transferOtp']>) {
  const { closePortal } = useDPortalContext<TransferOtpPayloads>();
  const [otpValue, setOtpValue] = useState('');
  const {
    setOtp,
    invalid,
    error,
    submit,
    isLoading,
    secondsLeft,
    restartCountdown,
  } = useOtp({
    // Close the sheet only once the backend call truly succeeds. Chaining
    // `.then(closePortal)` off `submit()` itself would also fire when the
    // OTP is simply incomplete, since `submit()` resolves (rather than
    // rejects) for the too-short case.
    action: async () => {
      await simulateVerify(otpValue);
      closePortal();
    },
    otpSize: 4,
    seconds: 10,
  });

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="mb-0 fw-semibold">Authorize transfer</h5>
          <small className="text-muted">
            {payload.amount}
            {' to '}
            {payload.recipient}
          </small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-3">
        <p className="text-muted small mb-0">
          Enter the 4-digit code sent by SMS. Try &quot;1234&quot;.
        </p>
        <DInputPin
          characters={4}
          onChange={(value) => {
            setOtpValue(value);
            setOtp(value);
          }}
          invalid={invalid}
          placeholder="•"
        />
        {invalid && (
          <DAlert color="danger">
            {error instanceof Error ? error.message : 'Please enter all 4 digits.'}
          </DAlert>
        )}
        <DButton
          variant="link"
          size="sm"
          className="p-0 align-self-start"
          text={secondsLeft > 0 ? `Resend in ${secondsLeft}s` : 'Resend code'}
          disabled={secondsLeft > 0}
          onClick={restartCountdown}
        />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Cancel" variant="outline" color="secondary" onClick={closePortal} />
        <DButton
          text="Authorize"
          loading={isLoading}
          onClick={() => {
            submit().catch(() => {});
          }}
        />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function TransferOtpMobileContent() {
  const { openPortal } = useDPortalContext<TransferOtpPayloads>();

  return (
    <MobileViewport>
      <div className="p-4 d-flex flex-column h-100">
        <div className="mb-4">
          <small className="text-muted">Main account</small>
          <h3 className="mb-0">$12,847.90</h3>
        </div>
        <div className="card p-3 mb-3">
          <small className="text-muted">Transfer to</small>
          <strong>Jane Doe — $500.00</strong>
        </div>
        <div className="mt-auto">
          <DButton
            className="w-100"
            text="Continue"
            onClick={() => openPortal('transferOtp', {
              recipient: 'Jane Doe',
              amount: '$500.00',
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

export const BottomSheetOtp: Story = {
  name: 'OTP in a Bottom Sheet (Transfer Authorization)',
  render: () => (
    <DContextProvider<TransferOtpPayloads>
      portalName="mobileOtpBottomSheet"
      availablePortals={{ transferOtp: TransferOtpSheet }}
    >
      <TransferOtpMobileContent />
    </DContextProvider>
  ),
};

// ---------------------------------------------------------------------------
// 2. Fullscreen OTP for a card lock/unlock confirmation
// ---------------------------------------------------------------------------

function FullscreenCardLockContent() {
  const [otpValue, setOtpValue] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const maxAttempts = 3;

  const {
    setOtp,
    invalid,
    error,
    submit,
    isLoading,
    secondsLeft,
    restartCountdown,
  } = useOtp({
    action: async () => {
      try {
        await simulateVerify(otpValue);
        setLocked(true);
      } catch (err) {
        setAttempts((prev) => prev + 1);
        throw err;
      }
    },
    otpSize: 4,
    seconds: 20,
  });

  const attemptsLeft = maxAttempts - attempts;

  return (
    <MobileViewport>
      <div className="p-4 d-flex flex-column h-100 text-center">
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
          <DIcon icon="Lock" hasCircle size="3rem" className="mb-3 text-primary bg-gray-50" />
          <h5 className="mb-1">
            {locked ? 'Card locked' : 'Lock your card'}
          </h5>
          <p className="text-muted small mb-0">
            {locked
              ? 'Your card ending in 4532 is now locked.'
              : 'Enter the 4-digit code sent to your phone to confirm.'}
          </p>
        </div>

        {!locked && (
          <>
            <div className="d-flex justify-content-center mb-3">
              <DInputPin
                characters={4}
                onChange={(value) => {
                  setOtpValue(value);
                  setOtp(value);
                }}
                invalid={invalid || attemptsLeft <= 0}
                disabled={attemptsLeft <= 0}
                placeholder="•"
              />
            </div>
            {invalid && attemptsLeft > 0 && (
              <DAlert color="danger">
                {error instanceof Error ? error.message : 'Please enter all 4 digits.'}
                {' '}
                <DBadge text={`${attemptsLeft} attempt${attemptsLeft === 1 ? '' : 's'} left`} color="danger" soft />
              </DAlert>
            )}
            {attemptsLeft <= 0 && (
              <DAlert color="danger">Too many failed attempts. Please contact support.</DAlert>
            )}
            <div className="my-3">
              <span className="display-6 fw-semibold">{secondsLeft > 0 ? secondsLeft : ''}</span>
              <DButton
                variant="link"
                size="sm"
                text={secondsLeft > 0 ? 'Resend available soon' : 'Resend code'}
                disabled={secondsLeft > 0}
                onClick={restartCountdown}
              />
            </div>
            <div className="mt-auto">
              <DButton
                className="w-100"
                text="Confirm lock"
                loading={isLoading}
                disabled={attemptsLeft <= 0}
                onClick={() => {
                  submit().catch(() => {});
                }}
              />
            </div>
          </>
        )}

        {locked && (
          <div className="mt-auto">
            <DButton className="w-100" text="Done" variant="outline" onClick={() => setLocked(false)} />
          </div>
        )}
      </div>
    </MobileViewport>
  );
}

export const FullscreenCardLock: Story = {
  name: 'Fullscreen OTP for Card Lock Confirmation',
  render: () => <FullscreenCardLockContent />,
};
