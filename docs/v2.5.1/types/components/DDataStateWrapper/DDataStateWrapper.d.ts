import type { ReactNode } from 'react';
type Renderable = ReactNode | (() => ReactNode);
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
export default function DDataStateWrapper<T>({ isLoading, isError, data, onRetry, renderLoading, renderEmpty, renderError, children, }: DDataStateWrapperProps<T>): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
