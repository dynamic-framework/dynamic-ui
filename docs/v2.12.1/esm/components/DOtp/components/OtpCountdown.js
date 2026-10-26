import { jsxs, jsx } from 'react/jsx-runtime';
import DButton from '../../DButton/DButton.js';

const defaultMessage = (secs) => (secs > 0
    ? `Didn't get any code? Resend in: ${secs}s`
    : "Didn't get any code?");
function OtpCountdown({ secondsLeft, restartCountdown, resendText, message, }) {
    return (jsxs("div", { className: "d-otp-countdown", children: [jsx("p", { className: "d-otp-countdown-text", children: message ? message(secondsLeft) : defaultMessage(secondsLeft) }), jsx(DButton, { text: resendText, variant: "link", className: "text-nowrap", disabled: secondsLeft > 0, onClick: restartCountdown })] }));
}

export { OtpCountdown as default };
//# sourceMappingURL=OtpCountdown.js.map
