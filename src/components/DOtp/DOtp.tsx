import { PropsWithChildren } from 'react';

import OtpCountdown from './components/OtpCountdown';
import DInputPin from '../DInputPin';
import DButton from '../DButton';
import useOtp from '../../hooks/useOtp';

export type PropsOtp = PropsWithChildren<{
  /**
   * Called with the entered OTP when the user submits a code of the expected
   * length. Use the received value to verify it.
   */
  action: (otp: string) => Promise<void> | void;
  isLoading?: boolean;
  className?: string;
  otpSize?: number;
  seconds?: number;
  texts?: {
    submit?: string;
    title?: string;
    contact?: string | React.ReactNode;
    resendText?: string;
    invalidCode?: string;
  }
}>;

const TEXT_PROPS = {
  resendText: 'Resend',
  submit: 'Authorize and continue',
  title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
  invalidCode: 'Invalid code, please try again.',
  contact: 'Problems with your digital token? Contact us',
};

export default function DOtp(
  {
    className,
    action,
    isLoading,
    otpSize = 6,
    texts: textsProp,
    seconds = 15,
  }: PropsOtp,
) {
  const texts = { ...TEXT_PROPS, ...textsProp };
  const {
    otp,
    setOtp,
    invalid,
    submit,
    isLoading: isSubmitting,
    secondsLeft,
    restartCountdown,
  } = useOtp({
    action: () => action(otp),
    otpSize,
    seconds,
  });

  return (
    <div className={className}>
      <p>{texts.title}</p>
      <div className="d-otp d-otp-content">
        <div className="d-otp-fields">
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
            resendText={texts.resendText}
          />
        </div>
        <hr className="d-otp-divider" />
        <div className="d-otp-footer">
          <DButton
            text={texts.submit}
            onClick={() => {
              submit().catch((err) => {
                // eslint-disable-next-line no-console
                console.error('Error in DOtp action:', err);
              });
            }}
            loading={isLoading || isSubmitting}
          />
          <p className="d-otp-contact">
            {texts.contact}
          </p>
        </div>
      </div>
    </div>
  );
}
