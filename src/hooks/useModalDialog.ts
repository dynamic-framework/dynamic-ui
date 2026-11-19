import { useLayoutEffect } from 'react';

import type { RefObject } from 'react';

/**
 * Opens the panel as a modal `<dialog>` and closes it before React takes it out
 * of the document.
 *
 * `showModal()` is what brings the focus trap, the inert page behind the panel
 * and the top layer. It is also what makes the browser return focus to whoever
 * opened the panel — but only if the dialog is CLOSED. A panel that disappears
 * from the DOM without closing leaves focus on `<body>`, which is what the
 * `<div>` did: a keyboard or screen reader user came back to the top of the
 * page and had to walk it again.
 *
 * The close runs in a layout effect's cleanup, which React calls while the node
 * is still in the document. That order is the whole point: the exit animation
 * plays with the dialog open, and focus is restored on the last moment before
 * the element goes away.
 */
export default function useModalDialog(ref: RefObject<HTMLDialogElement | null>) {
  useLayoutEffect(() => {
    const dialog = ref.current;
    // `open` guards a remount of the same element: `showModal()` on an already
    // open dialog throws.
    if (!dialog || dialog.open) return undefined;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [ref]);
}
