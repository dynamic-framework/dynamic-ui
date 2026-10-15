import DPortalStackStatic from './DPortalStackStatic';

import type { PortalStackRenderer } from './types';

/**
 * Renderer used by `DPortalContextProvider` to paint the portal stack.
 *
 * Starts as `DPortalStackStatic` (no `framer-motion`). `DModal` and `DOffcanvas`
 * register the animated `DPortalStack` when their module is evaluated, so
 * `framer-motion` only ends up in a bundle that imports one of them (the
 * confirm modal does, through `DModal`).
 */
let renderer: PortalStackRenderer = DPortalStackStatic;
const listeners = new Set<() => void>();

export function registerPortalStack(next: PortalStackRenderer) {
  if (renderer === next) return;
  renderer = next;
  listeners.forEach((listener) => listener());
}

export function subscribePortalStack(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getPortalStack() {
  return renderer;
}
