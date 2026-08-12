import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  DAlert,
  DBadge,
  DBox,
  DButton,
  DCard,
  DContextProvider,
  DInputPin,
  DListGroup,
  DModal,
  DTabs,
  type PortalProps,
  useDPortalContext,
  useOtp,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/OTP',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `Patterns built with the headless \`useOtp\` hook (code state, length/correctness
validation, submit action and resend countdown) combined with different layouts:
a login/transaction confirmation modal, an inline registration wizard step, a
multi-channel resend flow, and a compact quick-action card confirmation.

All variants simulate a backend call that only accepts \`"1234"\` as a valid code,
so you can try both the success and the "invalid code" paths.`,
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

// ---------------------------------------------------------------------------
// 1. OTP in a Modal (login / transaction confirmation)
// ---------------------------------------------------------------------------

type LoginOtpPayloads = {
  loginOtp: Record<string, never>;
};

function LoginOtpModal({ name }: PortalProps<LoginOtpPayloads['loginOtp']>) {
  const { closePortal } = useDPortalContext<LoginOtpPayloads>();
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
    // Close the modal only once the backend call truly succeeds. Chaining
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
    <DModal name={name} centered>
      <DModal.Header showCloseButton onClose={closePortal}>
        <h5 className="fw-bold mb-0">Confirm your transfer</h5>
      </DModal.Header>
      <DModal.Body className="d-flex flex-column gap-3">
        <p className="text-muted mb-0">
          Enter the 4-digit code we sent to your phone to authorize this transaction.
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
          text={secondsLeft > 0 ? `Resend code in ${secondsLeft}s` : 'Resend code'}
          disabled={secondsLeft > 0}
          onClick={restartCountdown}
        />
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Cancel" variant="outline" onClick={closePortal} />
        <DButton
          text="Verify and continue"
          loading={isLoading}
          onClick={() => {
            submit().catch(() => {});
          }}
        />
      </DModal.Footer>
    </DModal>
  );
}

function LoginOtpModalContent() {
  const { openPortal } = useDPortalContext<LoginOtpPayloads>();

  return (
    <div className="text-center">
      <p className="text-muted small mb-3">
        Try &quot;1234&quot; for a successful submit.
      </p>
      <DButton text="Transfer $500 to Jane Doe" onClick={() => openPortal('loginOtp', {})} />
    </div>
  );
}

export const LoginOtpModalStory: Story = {
  name: 'OTP in a Modal (Login / Transaction)',
  render: () => (
    <DContextProvider<LoginOtpPayloads>
      portalName="otpLoginModal"
      availablePortals={{ loginOtp: LoginOtpModal }}
    >
      <LoginOtpModalContent />
    </DContextProvider>
  ),
};

// ---------------------------------------------------------------------------
// 2. OTP inline as a wizard step (registration)
// ---------------------------------------------------------------------------

function stepBadgeText(step: 'account' | 'otp' | 'done') {
  if (step === 'done') {
    return 'Step 3 of 3';
  }
  if (step === 'otp') {
    return 'Step 2 of 3';
  }
  return 'Step 1 of 3';
}

function InlineRegistrationOtpContent() {
  const [step, setStep] = useState<'account' | 'otp' | 'done'>('account');
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
    // Advance to the "done" step only when the backend call truly succeeds
    // (see the comment in `LoginOtpModal` for why this can't be a `.then()`
    // chained off `submit()`).
    action: async () => {
      await simulateVerify(otpValue, '123456');
      setStep('done');
    },
    otpSize: 6,
    seconds: 15,
  });

  return (
    <DCard style={{ width: 420, maxWidth: '100%' }}>
      <DCard.Header className="d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Create account</h5>
        <DBadge text={stepBadgeText(step)} soft />
      </DCard.Header>
      <DCard.Body className="d-flex flex-column gap-3">
        {step === 'account' && (
          <>
            <p className="text-muted mb-0">
              We will send a 6-digit verification code to the phone number on file.
            </p>
            <DButton text="Send verification code" onClick={() => setStep('otp')} />
          </>
        )}
        {step === 'otp' && (
          <>
            <p className="text-muted mb-0">
              Enter the code below. Try &quot;123456&quot; for a successful submit.
            </p>
            <DInputPin
              characters={6}
              onChange={(value) => {
                setOtpValue(value);
                setOtp(value);
              }}
              invalid={invalid}
              placeholder="0"
            />
            {invalid && (
              <DAlert color="danger">
                {error instanceof Error ? error.message : 'Please enter all 6 digits.'}
              </DAlert>
            )}
            <div className="d-flex justify-content-between align-items-center">
              <DButton
                variant="link"
                size="sm"
                className="p-0"
                text={secondsLeft > 0 ? `Resend in ${secondsLeft}s` : 'Resend code'}
                disabled={secondsLeft > 0}
                onClick={restartCountdown}
              />
              <div className="d-flex gap-2">
                <DButton text="Back" variant="outline" onClick={() => setStep('account')} />
                <DButton
                  text="Continue"
                  loading={isLoading}
                  onClick={() => {
                    submit().catch(() => {});
                  }}
                />
              </div>
            </div>
          </>
        )}
        {step === 'done' && (
          <DAlert color="success">Account verified. Welcome aboard!</DAlert>
        )}
      </DCard.Body>
    </DCard>
  );
}

export const InlineRegistrationStep: Story = {
  name: 'OTP Inline in a Registration Wizard',
  render: () => <InlineRegistrationOtpContent />,
};

// ---------------------------------------------------------------------------
// 3. OTP with multi-channel resend (SMS / Email)
// ---------------------------------------------------------------------------

const CHANNEL_TAB_OPTIONS = [
  { label: 'SMS', tab: 'sms' },
  { label: 'Email', tab: 'email' },
];

function MultiChannelOtpContent() {
  const [channel, setChannel] = useState<'sms' | 'email'>('sms');
  const [otpValue, setOtpValue] = useState('');
  const [verified, setVerified] = useState(false);
  const {
    setOtp,
    invalid,
    error,
    submit,
    isLoading,
    secondsLeft,
    restartCountdown,
  } = useOtp({
    // Only mark the identity as verified once the backend call truly
    // succeeds (see the comment in `LoginOtpModal`).
    action: async () => {
      await simulateVerify(otpValue);
      setVerified(true);
    },
    otpSize: 4,
    seconds: 12,
  });

  return (
    <DCard style={{ width: 420, maxWidth: '100%' }}>
      <DCard.Header>
        <h5 className="mb-0">Verify your identity</h5>
      </DCard.Header>
      <DCard.Body className="d-flex flex-column gap-3">
        <DTabs
          options={CHANNEL_TAB_OPTIONS}
          defaultSelected="sms"
          onChange={(option) => {
            setChannel(option.tab as 'sms' | 'email');
            restartCountdown();
          }}
        />
        {!verified && (
          <>
            <p className="text-muted mb-0">
              {channel === 'sms'
                ? 'A 4-digit code was sent via SMS to your registered phone.'
                : 'A 4-digit code was sent to your registered email address.'}
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
            <div className="d-flex justify-content-between align-items-center">
              <DButton
                variant="link"
                size="sm"
                className="p-0"
                text={secondsLeft > 0 ? `Resend via ${channel} in ${secondsLeft}s` : `Resend via ${channel}`}
                disabled={secondsLeft > 0}
                onClick={restartCountdown}
              />
              <DButton
                text="Verify"
                loading={isLoading}
                onClick={() => {
                  submit().catch(() => {});
                }}
              />
            </div>
          </>
        )}
        {verified && (
          <DAlert color="success">Identity verified successfully.</DAlert>
        )}
      </DCard.Body>
    </DCard>
  );
}

export const MultiChannelResend: Story = {
  name: 'OTP with Multi-Channel Resend (SMS / Email)',
  render: () => <MultiChannelOtpContent />,
};

// ---------------------------------------------------------------------------
// 4. OTP as a compact Quick Action confirmation
// ---------------------------------------------------------------------------

function QuickActionOtpConfirmContent() {
  const [expanded, setExpanded] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
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
    // Only confirm the limit change once the backend call truly succeeds
    // (see the comment in `LoginOtpModal`).
    action: async () => {
      await simulateVerify(otpValue);
      setConfirmed(true);
    },
    otpSize: 4,
    seconds: 10,
  });

  return (
    <DCard style={{ width: 380, maxWidth: '100%' }}>
      <DCard.Body className="d-flex flex-column gap-3">
        <DListGroup>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Daily card limit</span>
            <strong>$2,000.00</strong>
          </DListGroup.Item>
        </DListGroup>
        {!expanded && !confirmed && (
          <DButton text="Increase limit to $5,000" onClick={() => setExpanded(true)} />
        )}
        {expanded && !confirmed && (
          <>
            <p className="text-muted small mb-0">
              Enter the 4-digit code sent to your phone to authorize this
              change. Try &quot;1234&quot;.
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
            <div className="d-flex justify-content-between align-items-center">
              <DButton
                variant="link"
                size="sm"
                className="p-0"
                text={secondsLeft > 0 ? `Resend in ${secondsLeft}s` : 'Resend code'}
                disabled={secondsLeft > 0}
                onClick={restartCountdown}
              />
              <DButton
                text="Authorize"
                loading={isLoading}
                onClick={() => {
                  submit().catch(() => {});
                }}
              />
            </div>
          </>
        )}
        {confirmed && (
          <DAlert color="success">Limit updated to $5,000.00</DAlert>
        )}
      </DCard.Body>
    </DCard>
  );
}

export const QuickActionCardConfirm: Story = {
  name: 'OTP as a Quick Action Card Confirmation',
  render: () => <QuickActionOtpConfirmContent />,
};
