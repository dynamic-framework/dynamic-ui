import type { PropsWithChildren, FC } from 'react';
export declare type ModalComponent = FC<ModalProps>;
export declare type ModalAvailableList = Record<string, ModalComponent>;
declare type Props = PropsWithChildren<{
    portalName: string;
    availableModals: ModalAvailableList;
}>;
export declare type ModalPayload = Record<string, any>;
export declare type ModalCallbackContext = {
    fromModal: boolean;
};
export declare type ModalCallbacks = {
    onBeforeOpen?: (payload?: ModalPayload) => void;
    onAfterOpen?: (payload?: ModalPayload) => void;
    onBeforeClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
    onAfterClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
};
export declare type ModalStackItem = {
    modalName: keyof ModalAvailableList;
    Component: ModalComponent;
    payload: ModalPayload;
    callbacks?: ModalCallbacks;
};
export declare type ModalConfig = {
    payload: ModalPayload;
    callbacks?: ModalCallbacks;
};
export declare type OpenModalFunction = (name: string, config?: ModalConfig) => void;
export declare type CloseModalFunction = (context?: ModalCallbackContext) => void;
export declare type ModalContextType = {
    stack: ModalStackItem[];
    openModal: OpenModalFunction;
    closeModal: CloseModalFunction;
};
export declare type ModalProps = {
    name: string;
    payload: ModalPayload;
    openModal: OpenModalFunction;
    closeModal: CloseModalFunction;
};
export declare const ModalContext: import("react").Context<ModalContextType | undefined>;
export declare function ModalContextProvider({ portalName, children, availableModals, }: Props): JSX.Element;
export declare function useModalContext(): ModalContextType;
export {};
