/**
 * @internal
 * Creates a DOM `<div>` portal mount point and appends it to `document.body`.
 * This hook is used exclusively by `DPortalContextProvider` and is **not** part
 * of the public API. Use `useDPortalContext` instead.
 */
export default function usePortal(portalName: string): {
    created: boolean;
};
