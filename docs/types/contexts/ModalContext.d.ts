import type { PropsWithChildren, FC } from 'react';
export type ModalComponent = FC<ModalProps>;
export type ModalAvailableList = Record<string, ModalComponent>;
type Props = PropsWithChildren<{
    portalName: string;
    availableModals: ModalAvailableList;
}>;
export type ModalPayload = Record<string, any>;
export type ModalCallbackContext = {
    fromModal: boolean;
};
export type ModalCallbacks = {
    onBeforeOpen?: (payload?: ModalPayload) => void;
    onAfterOpen?: (payload?: ModalPayload) => void;
    onBeforeClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
    onAfterClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
};
export type ModalStackItem = {
    modalName: keyof ModalAvailableList;
    Component: ModalComponent;
    payload: ModalPayload;
    callbacks?: ModalCallbacks;
};
export type ModalConfig = {
    payload: ModalPayload;
    callbacks?: ModalCallbacks;
};
export type OpenModalFunction = (name: string, config?: ModalConfig) => void;
export type CloseModalFunction = (context?: ModalCallbackContext) => void;
export type ModalContextType = {
    stack: ModalStackItem[];
    openModal: OpenModalFunction;
    closeModal: CloseModalFunction;
};
export type ModalProps = {
    name: string;
    payload: ModalPayload;
    openModal: OpenModalFunction;
    closeModal: CloseModalFunction;
};
export declare const ModalContext: import("react").Context<ModalContextType | undefined>;
export declare function ModalContextProvider({ portalName, children, availableModals, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function useModalContext(): ModalContextType;
export {};
