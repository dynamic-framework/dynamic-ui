/**
 * Configuration options for useConfirmModal hook
 */
export interface CriticalConfirmConfig {
    code: string;
    codeLabel?: string;
    inputPlaceholder?: string;
}
export type ConfirmModalColor = 'primary' | 'danger' | 'warning';
export interface UseConfirmModalConfig {
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmColor?: ConfirmModalColor;
    onConfirm: () => void | Promise<void>;
    onClose?: () => void;
    critical?: CriticalConfirmConfig;
}
/**
 * Entry in the confirm modal store
 */
export type ConfirmModalEntry = UseConfirmModalConfig & {
    id: string;
    onConfirmAction: () => Promise<void>;
    onCloseAction: () => void;
};
/**
 * Listener function for store subscription
 */
export type Listener = (entries: ConfirmModalEntry[]) => void;
/**
 * Confirm modal store interface
 */
export type ConfirmModalStore = {
    subscribe(listener: Listener): () => void;
    push(entry: ConfirmModalEntry): void;
    remove(id: string): void;
};
/**
 * Return type of useConfirmModal hook
 */
export interface UseConfirmModalReturn {
    open: () => void;
}
