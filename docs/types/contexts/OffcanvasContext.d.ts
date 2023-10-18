import type { PropsWithChildren, FC } from 'react';
export type OffcanvasComponent = FC<OffcanvasProps>;
export type OffcanvasAvailableList = Record<string, OffcanvasComponent>;
type Props = PropsWithChildren<{
    portalName: string;
    availableOffcanvas: OffcanvasAvailableList;
}>;
export type OffcanvasPayload = Record<string, any>;
export type OffcanvasCallbackContext = {
    fromOffcanvas: boolean;
};
export type OffcanvasCallbacks = {
    onBeforeOpen?: (payload?: OffcanvasPayload) => void;
    onAfterOpen?: (payload?: OffcanvasPayload) => void;
    onBeforeClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
    onAfterClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
};
export type OffcanvasStackItem = {
    offcanvasName: keyof OffcanvasAvailableList;
    Component: OffcanvasComponent;
    payload: OffcanvasPayload;
    callbacks?: OffcanvasCallbacks;
};
export type OffcanvasConfig = {
    payload: OffcanvasPayload;
    callbacks?: OffcanvasCallbacks;
};
export type OpenOffcanvasFunction = (name: string, config?: OffcanvasConfig) => void;
export type CloseOffcanvasFunction = (context?: OffcanvasCallbackContext) => void;
export type OffcanvasContextType = {
    stack: OffcanvasStackItem[];
    openOffcanvas: OpenOffcanvasFunction;
    closeOffcanvas: CloseOffcanvasFunction;
};
export type OffcanvasProps = {
    name: string;
    payload: OffcanvasPayload;
    openOffcanvas: OpenOffcanvasFunction;
    closeOffcanvas: CloseOffcanvasFunction;
};
export declare const OffcanvasContext: import("react").Context<OffcanvasContextType | undefined>;
export declare function OffcanvasContextProvider({ portalName, children, availableOffcanvas, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function useOffcanvasContext(): OffcanvasContextType;
export {};
