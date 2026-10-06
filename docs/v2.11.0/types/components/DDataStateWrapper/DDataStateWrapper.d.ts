import type { ReactNode } from 'react';
type Renderable = ReactNode | (() => ReactNode);
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
/**
 * Renders the loading, error, empty or success state of fetched data, in that
 * order of precedence. `data` is either a collection (empty with no items) or a
 * single resource (empty when `null`/`undefined`); `children` gets it back with
 * the same shape.
 */
declare function DDataStateWrapper<T>(props: DDataStateWrapperListProps<T>): ReactNode;
declare function DDataStateWrapper<T>(props: DDataStateWrapperSingleProps<T>): ReactNode;
export default DDataStateWrapper;
