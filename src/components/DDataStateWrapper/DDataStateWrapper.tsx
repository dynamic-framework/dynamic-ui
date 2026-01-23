import type { ReactNode } from 'react';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { LoadingState } from './LoadingState';

type Renderable = ReactNode | (() => ReactNode);

function render(renderable?: Renderable): ReactNode | null {
  if (renderable === undefined) return null;
  return typeof renderable === 'function' ? (renderable as () => ReactNode)() : renderable;
}

type DDataStateWrapperProps<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T[] | undefined;
  onRetry?: () => void;
  renderLoading?: Renderable;
  renderEmpty?: Renderable;
  renderError?: Renderable;
  children: (data: T[]) => ReactNode;
};

export function DDataStateWrapper<T>({
  isLoading,
  isError,
  data,
  onRetry,
  renderLoading,
  renderEmpty,
  renderError,
  children,
}: DDataStateWrapperProps<T>) {
  // 1. Loading
  if (isLoading) {
    if (renderLoading) return render(renderLoading);
    return <LoadingState />;
  }

  // 2. Error
  if (isError) {
    if (renderError) return render(renderError);
    return (
      <ErrorState
        onRetry={onRetry}
      />
    );
  }

  // 3. Empty
  if (!data?.length) {
    if (renderEmpty) return render(renderEmpty);
    return (
      <EmptyState />
    );
  }

  // 4. Success
  return <>{children(data)}</>;
}
