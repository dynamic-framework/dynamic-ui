import {
  type PropsWithChildren,
  type ReactNode,
  type ErrorInfo,
  useCallback,
} from 'react';
import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
  getErrorMessage,
} from 'react-error-boundary';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';

export {
  type FallbackProps,
  useErrorBoundary,
  getErrorMessage,
};

export type DErrorBoundaryProps = PropsWithChildren<{
  name?: string;
  fallback?: (props: FallbackProps) => ReactNode;
  resetKeys?: unknown[];
  onReset?: () => void;
  onError?: (error: unknown, info: ErrorInfo) => void;
}>;

export default function DErrorBoundary(
  {
    name,
    fallback,
    resetKeys,
    onReset,
    onError,
    children,
  }: DErrorBoundaryProps,
) {
  const handleError = (error: unknown, info: ErrorInfo) => {
    // eslint-disable-next-line no-console
    console.error(`[DErrorBoundary${name ? `:${name}` : ''}]`, getErrorMessage(error), info);
    onError?.(error, info);
  };

  const FallbackRender = useCallback((props: FallbackProps) => {
    if (fallback) return fallback(props);

    return (
      <DefaultErrorBoundary
        resetErrorBoundary={props.resetErrorBoundary}
      />
    );
  }, [fallback]);

  return (
    <ErrorBoundary
      resetKeys={resetKeys}
      onReset={onReset}
      onError={handleError}
      fallbackRender={FallbackRender}
    >
      {children}
    </ErrorBoundary>
  );
}
