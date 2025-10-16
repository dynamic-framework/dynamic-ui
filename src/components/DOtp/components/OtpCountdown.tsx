import useCountdown from '../hooks/useCountdown';
import DButton from '../../DButton';

type Props = {
  seconds: number;
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
    seconds,
    resendText,
    message,
  }: Props,
) {
  const { secondsLeft, restartCountdown } = useCountdown(seconds);

  return (
    <div className="d-flex gap-2 align-items-center">
      <p className="mb-0">
        {message ? message(secondsLeft) : defaultMessage(secondsLeft)}
      </p>
      <DButton
        text={resendText}
        variant="link"
        disabled={secondsLeft > 0}
        onClick={restartCountdown}
      />
    </div>
  );
}
