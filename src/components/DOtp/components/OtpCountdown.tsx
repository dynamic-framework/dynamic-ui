import DButton from '../../DButton';

type Props = {
  secondsLeft: number;
  restartCountdown: () => void;
  resendText?: string;
  message?: (secondsLeft: number) => string;
};

const defaultMessage = (secs: number) => (
  secs > 0
    ? `Didn't get any code? Resend in: ${secs}s`
    : "Didn't get any code?"
);

export default function OtpCountdown(
  {
    secondsLeft,
    restartCountdown,
    resendText,
    message,
  }: Props,
) {
  return (
    <div className="d-otp-countdown">
      <p className="d-otp-countdown-text">
        {message ? message(secondsLeft) : defaultMessage(secondsLeft)}
      </p>
      <DButton
        text={resendText}
        variant="link"
        className="text-nowrap"
        disabled={secondsLeft > 0}
        onClick={restartCountdown}
      />
    </div>
  );
}
