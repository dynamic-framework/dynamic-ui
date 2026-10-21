import type { PortalStackRenderer } from './types';
export declare function registerPortalStack(next: PortalStackRenderer): void;
export declare function subscribePortalStack(listener: () => void): () => void;
export declare function getPortalStack(): PortalStackRenderer;
