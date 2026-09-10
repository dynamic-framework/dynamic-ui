/// <reference types="react" />
type Props = {
    secondsLeft: number;
    restartCountdown: () => void;
    resendText?: string;
    message?: (secondsLeft: number) => string;
};
export default function OtpCountdown({ secondsLeft, restartCountdown, resendText, message, }: Props): import("react").JSX.Element;
export {};
