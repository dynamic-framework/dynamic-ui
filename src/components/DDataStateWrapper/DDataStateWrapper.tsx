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

type DDataStateWrapperBaseProps = {
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
  messages?: DDataStateMessages;
  renderLoading?: Renderable;
  renderEmpty?: Renderable;
  renderError?: Renderable;
};

/** A collection: empty when it has no items. */
export type DDataStateWrapperListProps<T> = DDataStateWrapperBaseProps & {
  /**
   * A collection; empty when it has no items. For a single resource, pass the
   * object itself: that overload is typed by `DDataStateWrapperSingleProps`.
   */
  data: T[] | undefined;
  /** Receives the array. */
  children: (data: T[]) => ReactNode;
};

/**
 * A single resource (an entity detail, a summary, a config object): empty when
 * it is `null` or `undefined`. The render prop receives the same object.
 */
export type DDataStateWrapperSingleProps<T> = DDataStateWrapperBaseProps & {
  /** A single resource; empty when it is `null` or `undefined`. */
  data: T | null | undefined;
  /** Receives the object itself. */
  children: (data: T) => ReactNode;
};

type DDataStateWrapperProps<T> = DDataStateWrapperListProps<T> | DDataStateWrapperSingleProps<T>;

function isEmpty<T>(data: T[] | T | null | undefined): boolean {
  if (Array.isArray(data)) return data.length === 0;
  return data === null || data === undefined;
}

/**
 * Renders the loading, error, empty or success state of fetched data, in that
 * order of precedence. `data` is either a collection (empty with no items) or a
 * single resource (empty when `null`/`undefined`); `children` gets it back with
 * the same shape.
 */
function DDataStateWrapper<T>(props: DDataStateWrapperListProps<T>): ReactNode;
function DDataStateWrapper<T>(props: DDataStateWrapperSingleProps<T>): ReactNode;
function DDataStateWrapper<T>({
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

  // 3. Empty: no items for a collection, null/undefined for a single resource
  if (isEmpty(data)) {
    if (renderEmpty) return render(renderEmpty);
    return (
      <EmptyState message={messages?.empty} />
    );
  }

  // 4. Success: the render prop gets the same shape it was given
  // Both overloads pair `data` with its own `children` signature, so the
  // value is handed back exactly as it was received.
  return <>{(children as (value: T[] | T) => ReactNode)(data as T[] | T)}</>;
}

export default DDataStateWrapper;
