import type { PropsWithChildren, FC } from 'react';
export declare type OffcanvasComponent = FC<OffcanvasProps>;
export declare type OffcanvasAvailableList = Record<string, OffcanvasComponent>;
declare type Props = PropsWithChildren<{
    portalName: string;
    availableOffcanvas: OffcanvasAvailableList;
}>;
export declare type OffcanvasPayload = Record<string, any>;
export declare type OffcanvasCallbackContext = {
    fromOffcanvas: boolean;
};
export declare type OffcanvasCallbacks = {
    onBeforeOpen?: (payload?: OffcanvasPayload) => void;
    onAfterOpen?: (payload?: OffcanvasPayload) => void;
    onBeforeClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
    onAfterClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
};
export declare type OffcanvasStackItem = {
    offcanvasName: keyof OffcanvasAvailableList;
    Component: OffcanvasComponent;
    payload: OffcanvasPayload;
    callbacks?: OffcanvasCallbacks;
};
export declare type OffcanvasConfig = {
    payload: OffcanvasPayload;
    callbacks?: OffcanvasCallbacks;
};
export declare type OpenOffcanvasFunction = (name: string, config?: OffcanvasConfig) => void;
export declare type CloseOffcanvasFunction = (context?: OffcanvasCallbackContext) => void;
export declare type OffcanvasContextType = {
    stack: OffcanvasStackItem[];
    openOffcanvas: OpenOffcanvasFunction;
    closeOffcanvas: CloseOffcanvasFunction;
};
export declare type OffcanvasProps = {
    name: string;
    payload: OffcanvasPayload;
    openOffcanvas: OpenOffcanvasFunction;
    closeOffcanvas: CloseOffcanvasFunction;
};
export declare const OffcanvasContext: import("react").Context<OffcanvasContextType | undefined>;
export declare function OffcanvasContextProvider({ portalName, children, availableOffcanvas, }: Props): JSX.Element;
export declare function useOffcanvasContext(): OffcanvasContextType;
export {};
