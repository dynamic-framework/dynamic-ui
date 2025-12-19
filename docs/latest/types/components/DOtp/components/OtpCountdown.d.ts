type Props = {
    seconds: number;
    resendText?: string;
    message?: (secondsLeft: number) => string;
};
export default function OtpCountdown({ seconds, resendText, message, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
