import type { PropsWithChildren, FC } from 'react';
type PortalComponent<P = any> = FC<PortalProps<P>>;
type PortalAvailableList<T extends Record<string, unknown>> = {
    [K in keyof T]: PortalComponent<T[K]>;
};
/**
 * Props for the `DPortalContextProvider` (mounted internally by `DContextProvider`).
 * Consumers should configure these props on `DContextProvider` directly — never
 * use `DPortalContextProvider` directly.
 * @template T - Map of portal name → payload shape (e.g. `{ modal: { title: string } }`).
 */
export type PortalContextProps<T extends Record<string, unknown>> = PropsWithChildren<{
    /** DOM element id used as the portal mount point. */
    portalName: string;
    /** Map of portal name to the component that renders it. */
    availablePortals?: PortalAvailableList<T>;
}>;
type OpenPortalFunction<T extends Record<string, unknown>> = <K extends keyof T & string>(name: K, payload: T[K]) => void;
type ClosePortalFunction = () => void;
/**
 * Consumer-facing shape of a single entry in the portal stack.
 * Only exposes `name` and `payload` — the internal `Component` field is not part of the public API.
 * @template T - Map of portal name → payload shape.
 */
export type PortalStackEntry<T extends Record<string, unknown>> = {
    [K in keyof T]: {
        /** Portal identifier — matches the key passed to `openPortal`. */
        name: K & string;
        /** Payload forwarded from `openPortal`. */
        payload: T[K];
    };
}[keyof T];
/**
 * Value returned by `useDPortalContext`. Provides methods to open/close portals
 * and inspect the current portal stack.
 * @template T - Map of portal name → payload shape.
 */
export type PortalContextType<T extends Record<string, unknown>> = {
    /** Currently open portals, ordered from oldest (bottom) to newest (top). */
    stack: PortalStackEntry<T>[];
    /**
     * Pushes a named portal onto the stack, rendering its registered component
     * with the given payload.
     * @param name - Key of the portal to open (must be registered in `availablePortals`).
     * @param payload - Data forwarded to the portal component via `PortalProps.payload`.
     *   TypeScript will enforce that `payload` matches the shape declared for `name` in `T`.
     */
    openPortal: OpenPortalFunction<T>;
    /** Pops the topmost portal off the stack, closing it. */
    closePortal: ClosePortalFunction;
};
/**
 * Props interface received by every component registered in `availablePortals`.
 * Use `PortalProps<Payloads['myPortal']>` to type a specific portal component.
 * @template P - The payload shape for this portal.
 */
export type PortalProps<P = unknown> = {
    /** Portal identifier, matches the key used in `openPortal`. */
    name: string;
    /** Data passed via `openPortal`. */
    payload: P;
};
export declare const DPortalContext: import("react").Context<PortalContextType<any> | undefined>;
export declare function DPortalContextProvider<T extends Record<string, unknown>>({ portalName, children, availablePortals, }: PortalContextProps<T>): import("react").JSX.Element;
/**
 * Hook to open/close registered portals (modals, offcanvas, etc.).
 *
 * **Prerequisite**: must be called inside a `DContextProvider` configured with
 * `portalName` and `availablePortals`. `DContextProvider` mounts
 * `DPortalContextProvider` internally — consumers never use
 * `DPortalContextProvider` directly.
 *
 * @template T - Map of portal name → payload shape (e.g. `ModalPayloads`).
 *   Typing this generic gives you autocomplete on `openPortal` arguments.
 * @returns `{ openPortal, closePortal, stack }` from the nearest portal context.
 * @throws If called outside of `DContextProvider` / `DPortalContextProvider`.
 *
 * @requires DContextProvider
 *
 * @example
 * ```tsx
 * const { openPortal, closePortal } = useDPortalContext<ModalPayloads>();
 * openPortal('confirm', { message: 'Are you sure?' });
 * ```
 */
export declare function useDPortalContext<T extends Record<string, unknown>>(): PortalContextType<T>;
export {};
