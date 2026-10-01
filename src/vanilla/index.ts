/**
 * Dynamic Framework, without a framework.
 *
 * The behaviour layer for pages that are HTML and Liquid rather than React —
 * which at Modyo is most of them. It does not render anything: it finds the
 * markup the React components already produce and makes it work.
 *
 * ```html
 * <link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/3/css/dynamic.min.css">
 * <script type="module" src="https://cdn.dynamicframework.dev/assets/3/vanilla/dynamic.min.js"></script>
 * ```
 *
 * That is the whole setup, and it is stated once in `stories/vanilla/Html.tsx`
 * so every example prints the same thing. NOTE: `.github/workflows/cdn.yml`
 * publishes `dist/css/` and `dist/vanilla/` under `assets/<semver>/` only —
 * nothing creates the `assets/3/` major alias these URLs use.
 *
 * Markup carrying a `data-df-*` attribute is enhanced
 * on load and again whenever more of it arrives — which matters, because Modyo
 * widgets render after the page does.
 *
 * ## The one rule
 *
 * The DOM here is the DOM `src/components` renders. Same classes, same state
 * attributes, same ARIA. One stylesheet dresses both, one set of documentation
 * describes both, and a template author can copy the markup out of Storybook
 * and have it work.
 *
 * It follows that this layer sets only what the stylesheet already reads —
 * `aria-selected` and `hidden` on tabs, `data-expanded` on a collapse — and
 * invents no state of its own.
 *
 * ## It is an enhancement, not a requirement
 *
 * Every piece of markup here means something before the script runs. Tabs are
 * headings and their content; a collapse is a button and a paragraph; a modal
 * is a `<dialog>` the browser can open on its own. The script makes them
 * better, it does not make them appear.
 */

import {
  destroy, enhance, start, stop,
} from './registry';
import {
  close as closeModal, open as openModal, modal, modalOpener,
} from './modal';
import { toast, toastBehaviour } from './toast';

import { tabs } from './tabs';
import { collapse, collapseToggle, toggle as toggleCollapse } from './collapse';

export { define } from './registry';
/* Re-exported so the modules that register them cannot be tree-shaken away. */
export {
  tabs, collapse, collapseToggle, modal, modalOpener, toastBehaviour,
};
export type { Behaviour, Teardown } from './registry';
export type { ToastOptions, ToastPlacement } from './toast';

const DF = {
  /** Enhances a subtree now. For markup inserted by code that bypasses the DOM. */
  enhance,
  /** Removes every behaviour from a subtree, before a framework discards it. */
  destroy,
  /** Starts the automatic enhancement. Called for you when the bundle loads. */
  start,
  stop,

  openModal,
  closeModal,
  toggleCollapse,
  toast,
};

export {
  enhance, destroy, start, stop, openModal, closeModal, toggleCollapse, toast,
};

/*
 * Enhancing on import is the point of a CDN bundle.
 *
 * A `<script type="module">` tag is the whole integration; asking a template
 * author to add a second line calling `start()` would mean the common failure
 * is a page where nothing works and nothing says why.
 *
 * `DF` goes on `window` for the same reason. The IIFE build gets a global from
 * esbuild's `globalName`, but the ESM build does not — and every snippet in
 * the documentation pairs `<script type="module">` with a later
 * `DF.toast(...)`, which under a module script is a `DF is not defined` in the
 * console of a page that otherwise looks fine. A template author cannot
 * `import` from a Liquid file, so the global is the only handle they have.
 *
 * Guarded so importing this from a test or a server build does nothing.
 */
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var DF: typeof import('./index').default;
}

if (typeof document !== 'undefined') {
  start();
  window.DF = DF;
}

export { DF };
export default DF;
