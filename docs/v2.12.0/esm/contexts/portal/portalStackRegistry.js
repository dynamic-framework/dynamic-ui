import DPortalStackStatic from './DPortalStackStatic.js';

/**
 * Renderer used by `DPortalContextProvider` to paint the portal stack.
 *
 * Starts as `DPortalStackStatic` (no `framer-motion`). `DModal` and `DOffcanvas`
 * register the animated `DPortalStack` when their module is evaluated, so
 * `framer-motion` only ends up in a bundle that imports one of them (the
 * confirm modal does, through `DModal`).
 */
let renderer = DPortalStackStatic;
const listeners = new Set();
function registerPortalStack(next) {
    if (renderer === next)
        return;
    renderer = next;
    listeners.forEach((listener) => listener());
}
function subscribePortalStack(listener) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}
function getPortalStack() {
    return renderer;
}

export { getPortalStack, registerPortalStack, subscribePortalStack };
//# sourceMappingURL=portalStackRegistry.js.map
