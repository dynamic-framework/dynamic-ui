import type { ReactNode } from 'react';

import { createToastStore } from './store';

/**
 * The one store the React tree reads.
 *
 * A module singleton, because `toast()` has to be callable from anywhere — an
 * API error handler, a saga, a `catch` in a utility — and threading a context
 * through to those places is what a toast API exists to avoid. The 2.x hook
 * had the same property by way of `react-hot-toast`'s own singleton.
 *
 * It holds `ReactNode`, so a toast's content is whatever React can render.
 */
export const toastStore = createToastStore<ReactNode>();

let minted = 0;

/**
 * An id, before the toast exists.
 *
 * The default layout's dismiss button has to know which toast to dismiss, and
 * the id is the only handle. Asking the store for it means `show()` has to be
 * called first — so the content would have to be built, shown, and replaced,
 * which is two renders and a lie about when the toast was created.
 *
 * Minting it here instead makes the order natural: an id, then content that
 * closes over it, then one `show()`.
 */
export function nextToastId(): string {
  minted += 1;
  return `df-toast-${minted}`;
}
