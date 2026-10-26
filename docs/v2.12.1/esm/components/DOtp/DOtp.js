import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import OtpCountdown from './components/OtpCountdown.js';
import DInputPin from '../DInputPin/DInputPin.js';
import DButton from '../DButton/DButton.js';
import useOtp from '../../hooks/useOtp.js';

const TEXT_PROPS = {
    resend: 'Resend',
    resendText: 'Resend',
    submit: 'Authorize and continue',
    title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
    invalidCode: 'Invalid code, please try again.',
    contact: (jsxs(Fragment, { children: [jsx("span", { children: "Problems with your digital token? Contact us" }), ' ', jsx("a", { href: "https://www.modyo.com", className: "link-primary text-nowrap", target: "_blank", rel: "noreferrer", children: "Contact us" })] })),
};
function DOtp({ className, action, isLoading, otpSize = 6, texts = TEXT_PROPS, seconds = 15, }) {
    const { setOtp, invalid, submit, isLoading: isSubmitting, secondsLeft, restartCountdown, } = useOtp({ action, otpSize, seconds });
    return (jsxs("div", { className: className, children: [jsx("p", { children: texts.title }), jsxs("div", { className: "d-otp d-otp-content", children: [jsxs("div", { className: "d-otp-fields", children: [jsx(DInputPin, { className: "modal-otp-pin", characters: otpSize, onChange: (e) => setOtp(e), invalid: invalid, hint: invalid ? texts.invalidCode : undefined, placeholder: "0" }), jsx(OtpCountdown, { secondsLeft: secondsLeft, restartCountdown: restartCountdown, resendText: texts.resendText })] }), jsx("hr", { className: "d-otp-divider" }), jsxs("div", { className: "d-otp-footer", children: [jsx(DButton, { text: texts.submit, onClick: () => {
                                    submit().catch((err) => {
                                        // eslint-disable-next-line no-console
                                        console.error('Error in DOtp action:', err);
                                    });
                                }, loading: isLoading || isSubmitting }), jsx("p", { className: "d-otp-contact", children: texts.contact })] })] })] }));
}

export { DOtp as default };
//# sourceMappingURL=DOtp.js.map
