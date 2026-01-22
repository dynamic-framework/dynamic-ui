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
} from 'react-error-boundary';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';

export { useErrorBoundary, type FallbackProps };

export type DErrorBoundaryProps = PropsWithChildren<{
  name?: string;
  fallback?: (props: Partial<FallbackProps>) => ReactNode;
  resetKeys?: unknown[];
  onReset?: () => void;
  onError?: (error: Error, info: ErrorInfo) => void;
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
  const handleError = (error: Error, info: ErrorInfo) => {
    // eslint-disable-next-line no-console
    console.error(`[DErrorBoundary${name ? `:${name}` : ''}]`, error, info);
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
