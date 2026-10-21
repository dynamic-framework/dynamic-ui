import type { ReactNode } from 'react';

import { createToastStore } from './store';

/**
 * The one store the React tree reads.
 *
 * A module singleton, because `toast()` has to be callable from anywhere — an
 * API error handler, a saga, a `catch` in a utility — and threading a context
 * through to those places is what a toast API exists to avoid. The
 * `react-hot-toast` version had the same property by way of the library's own
 * singleton.
 *
 * It holds `ReactNode`, so a toast's content is whatever React can render.
 */
export const toastStore = createToastStore<ReactNode>();
