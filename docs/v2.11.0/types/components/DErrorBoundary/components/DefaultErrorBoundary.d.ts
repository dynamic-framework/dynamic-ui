/// <reference types="react" />
import { FallbackProps } from 'react-error-boundary';
type Props = {
    resetErrorBoundary: FallbackProps['resetErrorBoundary'];
    message?: string;
    retryMessage?: string;
};
export default function DefaultErrorBoundary({ resetErrorBoundary, message, retryMessage, }: Props): import("react").JSX.Element;
export {};
