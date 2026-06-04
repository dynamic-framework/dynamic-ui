import type { ReactNode } from 'react';
import { ErrorState } from './components/ErrorState';
import { EmptyState } from './components/EmptyState';
import { LoadingState } from './components/LoadingState';

type Renderable = ReactNode | (() => ReactNode);

function render(renderable?: Renderable): ReactNode | null {
  if (renderable === undefined) return null;
  return typeof renderable === 'function' ? (renderable as () => ReactNode)() : renderable;
}

export type DDataStateMessages = {
  loading?: string;
  empty?: string;
  error?: string;
  retry?: string;
};

type DDataStateWrapperProps<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T[] | undefined;
  onRetry?: () => void;
  messages?: DDataStateMessages;
  renderLoading?: Renderable;
  renderEmpty?: Renderable;
  renderError?: Renderable;
  children: (data: T[]) => ReactNode;
};

export default function DDataStateWrapper<T>({
  isLoading,
  isError,
  data,
  onRetry,
  messages,
  renderLoading,
  renderEmpty,
  renderError,
  children,
}: DDataStateWrapperProps<T>) {
  // 1. Loading
  if (isLoading) {
    if (renderLoading) return render(renderLoading);
    return <LoadingState ariaLabel={messages?.loading} />;
  }

  // 2. Error
  if (isError) {
    if (renderError) return render(renderError);
    return (
      <ErrorState
        onRetry={onRetry}
        message={messages?.error}
        retryMessage={messages?.retry}
      />
    );
  }

  // 3. Empty
  if (!data?.length) {
    if (renderEmpty) return render(renderEmpty);
    return (
      <EmptyState message={messages?.empty} />
    );
  }

  // 4. Success
  return <>{children(data)}</>;
}
