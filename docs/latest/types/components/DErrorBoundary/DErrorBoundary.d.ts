import { type PropsWithChildren, type ReactNode, type ErrorInfo } from 'react';
import { FallbackProps, useErrorBoundary, getErrorMessage } from 'react-error-boundary';
export { type FallbackProps, useErrorBoundary, getErrorMessage, };
export type DErrorBoundaryProps = PropsWithChildren<{
    name?: string;
    fallback?: (props: FallbackProps) => ReactNode;
    resetKeys?: unknown[];
    onReset?: () => void;
    onError?: (error: unknown, info: ErrorInfo) => void;
}>;
export default function DErrorBoundary({ name, fallback, resetKeys, onReset, onError, children, }: DErrorBoundaryProps): import("react/jsx-runtime").JSX.Element;
