import type { PropsWithChildren, FC } from 'react';
type ModalComponent<P = any> = FC<ModalProps<P>>;
type ModalAvailableList<T extends Record<string, unknown>> = {
    [K in keyof T]: ModalComponent<T[K]>;
};
type Props<T extends Record<string, unknown>> = PropsWithChildren<{
    portalName: string;
    availableModals: ModalAvailableList<T>;
}>;
type ModalStackItem<N extends string = string, P = any> = {
    modalName: N;
    Component: ModalComponent<P>;
    payload: P;
};
type OpenModalFunction<P = unknown> = (name: string, payload: P) => void;
type CloseModalFunction = () => void;
type ModalContextType<T extends Record<string, unknown>> = {
    stack: ModalStackItem<string, T[keyof T]>[];
    openModal: OpenModalFunction<T[keyof T]>;
    closeModal: CloseModalFunction;
};
export type ModalProps<P = unknown> = {
    name: string;
    payload: P;
    openModal: OpenModalFunction<P>;
    closeModal: CloseModalFunction;
};
export declare const DModalContext: import("react").Context<ModalContextType<any> | undefined>;
export declare function DModalContextProvider<T extends Record<string, unknown>>({ portalName, children, availableModals, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export declare function useDModalContext<T extends Record<string, unknown>>(): ModalContextType<T>;
export {};
