/// <reference types="react" />
import type { ConfirmModalStore } from './types';
export type { ConfirmModalEntry, Listener, ConfirmModalStore } from './types';
export declare function createConfirmModalStore(): ConfirmModalStore;
export declare const ConfirmModalStoreContext: import("react").Context<ConfirmModalStore | null>;
export declare function useConfirmModalStore(): ConfirmModalStore;
