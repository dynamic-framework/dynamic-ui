import { PropsWithChildren } from 'react';
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
    };
}>;
export default function DOtp({ className, action, isLoading, otpSize, texts, seconds, }: PropsOtp): import("react/jsx-runtime").JSX.Element;
