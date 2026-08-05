import { PropsWithChildren } from 'react';

import OtpCountdown from './components/OtpCountdown';
import DInputPin from '../DInputPin';
import DButton from '../DButton';
import useOtp from '../../hooks/useOtp';

export type PropsOtp = PropsWithChildren<{
  action: () => Promise<void> | void;
  isLoading?: boolean;
  className?: string;
  otpSize?: number;
  seconds?: number;
  texts?: {
    submit?: string;
    resend?: string;
    title?: string;
    contact?: string | React.ReactNode;
    resendText?: string;
    invalidCode?: string;
  }
}>;

const TEXT_PROPS = {
  resend: 'Resend',
  resendText: 'Resend code',
  submit: 'Authorize and continue',
  title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
  invalidCode: 'Invalid code, please try again.',
  contact: (
    <>
      <span>Problems with your digital token? Contact us</span>
      {' '}
      <a
        href="https://www.modyo.com"
        className="link-primary text-nowrap"
        target="_blank"
        rel="noreferrer"
      >
        Contact us
      </a>
    </>
  ),
};

export default function DOtp(
  {
    className,
    action,
    isLoading,
    otpSize = 6,
    texts = TEXT_PROPS,
    seconds = 15,
  }: PropsOtp,
) {
  const {
    setOtp,
    invalid,
    submit,
    secondsLeft,
    restartCountdown,
  } = useOtp({ action, otpSize, seconds });

  return (
    <div className={className}>
      <p>{texts.title}</p>
      <div className="d-flex flex-column gap-6 pb-4 px-3">
        <div className="d-flex flex-column gap-6">
          <DInputPin
            className="modal-otp-pin"
            characters={otpSize}
            onChange={(e) => setOtp(e)}
            invalid={invalid}
            hint={invalid ? texts.invalidCode : undefined}
            placeholder="0"
          />
          <OtpCountdown
            secondsLeft={secondsLeft}
            restartCountdown={restartCountdown}
            resendText={texts.resend}
          />
        </div>
        <hr className="m-0" />
        <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
          <DButton
            text={texts.submit}
            onClick={() => {
              submit().catch((err) => {
                // eslint-disable-next-line no-console
                console.error('Error in DOtp action:', err);
              });
            }}
            loading={isLoading}
          />
          <p className="small ms-lg-auto mb-0">
            {texts.contact}
          </p>
        </div>
      </div>
    </div>
  );
}
