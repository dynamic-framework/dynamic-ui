import {
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

import OtpCountdown from './components/OtpCountdown';
import DInputPin from '../DInputPin';
import DButton from '../DButton';

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
  }
}>;

const TEXT_PROPS = {
  resend: 'Resend',
  resendText: 'Resend code',
  submit: 'Authorize and continue',
  title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
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
  const [otp, setOtp] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handler = useCallback(async () => {
    if (otp.length < otpSize) {
      setInvalid(true);
      return;
    }

    setInvalid(false);

    await action();
  }, [
    otp.length,
    action,
    otpSize,
  ]);

  return (
    <div className={className}>
      <p>{texts.title}</p>
      <div className="d-otp d-otp-content">
        <div className="d-otp-fields">
          <DInputPin
            className="modal-otp-pin"
            characters={otpSize}
            onChange={(e) => setOtp(e)}
            invalid={invalid && otp.length < otpSize}
            placeholder="0"
          />
          <OtpCountdown
            seconds={seconds}
            resendText={texts.resend}
          />
        </div>
        <hr className="d-otp-divider" />
        <div className="d-otp-footer">
          <DButton
            text={texts.submit}
            onClick={() => {
              handler().catch((err) => {
                // eslint-disable-next-line no-console
                console.error('Error in DOtp action:', err);
              });
            }}
            loading={isLoading}
          />
          <p className="d-otp-contact">
            {texts.contact}
          </p>
        </div>
      </div>
    </div>
  );
}
