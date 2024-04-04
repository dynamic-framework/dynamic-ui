import type { PropsWithChildren, FC } from 'react';
type PortalComponent<P = any> = FC<PortalProps<P>>;
type PortalAvailableList<T extends Record<string, unknown>> = {
    [K in keyof T]: PortalComponent<T[K]>;
};
export type PortalContextProps<T extends Record<string, unknown>> = PropsWithChildren<{
    portalName: string;
    availablePortals?: PortalAvailableList<T>;
}>;
type PortalStackItem<N extends string = string, P = any> = {
    name: N;
    Component: PortalComponent<P>;
    payload: P;
};
type OpenPortalFunction<P = unknown> = (name: string, payload: P) => void;
type ClosePortalFunction = () => void;
export type PortalContextType<T extends Record<string, unknown>> = {
    stack: PortalStackItem<string, T[keyof T]>[];
    openPortal: OpenPortalFunction<T[keyof T]>;
    closePortal: ClosePortalFunction;
};
export type PortalProps<P = unknown> = {
    name: string;
    payload: P;
};
export declare const DPortalContext: import("react").Context<PortalContextType<any> | undefined>;
export declare function DPortalContextProvider<T extends Record<string, unknown>>({ portalName, children, availablePortals, }: PortalContextProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function useDPortalContext<T extends Record<string, unknown>>(): PortalContextType<T>;
export {};
