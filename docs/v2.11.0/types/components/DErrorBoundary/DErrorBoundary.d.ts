import { type PropsWithChildren, type ReactNode, type ErrorInfo } from 'react';
import { FallbackProps, useErrorBoundary, getErrorMessage } from 'react-error-boundary';
export { type FallbackProps, useErrorBoundary, getErrorMessage, };
export type DErrorBoundaryProps = PropsWithChildren<{
    name?: string;
    fallback?: (props: FallbackProps) => ReactNode;
    resetKeys?: unknown[];
    onReset?: () => void;
    onError?: (error: unknown, info: ErrorInfo) => void;
    /** Texts of the default fallback. Ignored when `fallback` is provided. */
    messages?: {
        error?: string;
        retry?: string;
    };
}>;
export default function DErrorBoundary({ name, fallback, resetKeys, onReset, onError, messages, children, }: DErrorBoundaryProps): import("react").JSX.Element;
