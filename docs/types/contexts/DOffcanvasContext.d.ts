import type { PropsWithChildren, FC } from 'react';
type OffcanvasComponent<P = any> = FC<OffcanvasProps<P>>;
type OffcanvasAvailableList<T extends Record<string, unknown>> = {
    [K in keyof T]: OffcanvasComponent<T[K]>;
};
type Props<T extends Record<string, unknown>> = PropsWithChildren<{
    portalName: string;
    availableOffcanvas: OffcanvasAvailableList<T>;
}>;
type OffcanvasStackItem<N extends string = string, P = any> = {
    offcanvasName: N;
    Component: OffcanvasComponent<P>;
    payload: P;
};
type OpenOffcanvasFunction<P = unknown> = (name: string, payload: P) => void;
type CloseOffcanvasFunction = () => void;
type OffcanvasContextType<T extends Record<string, unknown>> = {
    stack: OffcanvasStackItem<string, T[keyof T]>[];
    openOffcanvas: OpenOffcanvasFunction<T[keyof T]>;
    closeOffcanvas: CloseOffcanvasFunction;
};
export type OffcanvasProps<P = any> = {
    name: string;
    payload: P;
    openOffcanvas: OpenOffcanvasFunction<P>;
    closeOffcanvas: CloseOffcanvasFunction;
};
export declare const DOffcanvasContext: import("react").Context<OffcanvasContextType<any> | undefined>;
export declare function DOffcanvasContextProvider<T extends Record<string, unknown>>({ portalName, children, availableOffcanvas, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export declare function useDOffcanvasContext<T extends Record<string, unknown>>(): OffcanvasContextType<T>;
export {};
