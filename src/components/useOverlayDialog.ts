import {
  useCallback, useEffect, useMemo, useRef,
} from 'react';

import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';

/**
 * Everything a `<dialog>` panel needs, in one place.
 *
 * This was written out twice, verbatim, in `DModal` and `DModal` — the
 * `showModal()` effect, the Escape veto, the outside-click detection, the
 * label id, the scroll lock. Their sub-components were duplicated too, and
 * that is where it showed: `DModalFooter` accepted an `actionPlacement` of
 * `center` and `DModalFooter` did not, for one element and one stylesheet.
 * Nobody decided that; it drifted, the way two copies of anything drift.
 */
export default function useOverlayDialog(
  { name, staticBackdrop }: { name: string; staticBackdrop?: boolean },
) {
  const ref = useRef<HTMLDialogElement>(null);
  const overlay = useMemo(() => ({ labelId: `${name}Label` }), [name]);

  /**
   * Whatever had focus when the panel opened — the trigger, in practice.
   *
   * `showModal()` restores focus to it on `close()`, and that covers Escape
   * and a click on the backdrop. It does NOT cover the way most panels in
   * this library are actually dismissed: a Cancel button calling
   * `closePortal()`, which unmounts the `<dialog>` while it is still open.
   * No `close` event ever fires for a node that is simply removed, so the
   * browser has nothing to restore from and a keyboard user is dropped at the
   * top of the document.
   */
  const trigger = useRef<HTMLElement | null>(null);
  const restored = useRef(false);

  /**
   * Puts focus back, once.
   *
   * Three things it refuses to do, each one a way an unconditional `focus()`
   * makes the page worse than leaving it alone:
   *
   * - Run twice. `close` fires and then the component unmounts a transition
   *   later; the second call would yank focus back from wherever the consumer
   *   sent it in between.
   * - Focus a trigger that is gone. Opening a panel from a menu item that the
   *   panel itself replaces is ordinary, and `focus()` on a detached node
   *   silently moves focus to `<body>` — worse than not trying.
   * - Fight a deliberate move. If focus already sits on something that is
   *   neither `<body>` nor inside the closing panel, somebody put it there on
   *   purpose: a second panel opened on top, or a newly revealed field. The
   *   browser's own restoration landing first looks exactly like this, which
   *   is why the native path needs no special case here.
   */
  const restoreFocus = useCallback(() => {
    if (restored.current) return;

    const element = trigger.current;
    const active = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    const focusIsLoose = !active
      || active === document.body
      || Boolean(dialog?.contains(active));

    if (!focusIsLoose) {
      restored.current = true;
      trigger.current = null;
      return;
    }

    if (!element?.isConnected || typeof element.focus !== 'function') return;

    restored.current = true;
    trigger.current = null;
    element.focus();
  }, []);

  /**
   * Opened with `showModal()`, which is the whole reason this is a `<dialog>`.
   *
   * Everything the hand-written version implemented comes with it, and three
   * of those were broken:
   *
   * - **Focus moves into the panel** and is **restored to whatever opened it**.
   *   `DPortalContext` used to `blur()` the trigger, so focus went to `<body>`
   *   — its Tab trap never engaged from a cold start, and closing left a
   *   keyboard user at the top of the page.
   * - **The rest of the page is `inert`**, so a screen reader's virtual cursor
   *   cannot read it. A Tab trap never did that; browse mode does not use Tab.
   * - **The top layer**, so no consumer `z-index` can cover it.
   *
   * It is also why there is one component now rather than two: a drawer opened
   * this way IS modal. That is what `DModal` names — the behaviour, not the
   * placement.
   */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;

    restored.current = false;

    /*
     * Read the trigger BEFORE `showModal()`: the call moves focus into the
     * panel, so a line later `document.activeElement` is the panel's own
     * autofocus target and the opener is unrecoverable.
     *
     * Guarded on `open` because StrictMode runs this twice — the second pass
     * finds the dialog already open and must not overwrite the trigger with
     * whatever is focused inside it.
     */
    if (!dialog.open) {
      trigger.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    }

    dialog.addEventListener('close', restoreFocus);

    return () => {
      dialog.removeEventListener('close', restoreFocus);

      /*
       * The unmount path, for a panel closed by `closePortal()` rather than by
       * the dialog closing itself.
       *
       * Deferred, because at cleanup time React has not removed the node yet
       * and an open modal dialog makes the rest of the page `inert` — a
       * `focus()` on the trigger right here is a no-op, which is exactly the
       * silent failure this is here to fix. A microtask runs after the commit
       * finishes, by which point the dialog is detached and the page is live
       * again.
       */
      queueMicrotask(restoreFocus);
    };
  }, [restoreFocus]);

  /* `<dialog>` does not lock the page behind it; that part stays ours. */
  useDisableBodyScrollEffect(true);

  /**
   * A static backdrop refuses Escape too.
   *
   * `cancel` fires for Escape and is the only chance to veto it — `close` is
   * after the fact.
   */
  const onCancel = useCallback((event: React.SyntheticEvent) => {
    if (staticBackdrop) event.preventDefault();
  }, [staticBackdrop]);

  /**
   * A click whose target is the dialog itself landed outside the panel: the
   * panel's own children are the targets for clicks inside it. That is the
   * only signal `<dialog>` gives for "outside".
   */
  const onClick = useCallback((event: React.MouseEvent<HTMLDialogElement>) => {
    if (staticBackdrop || event.target !== ref.current) return;
    ref.current?.close();
  }, [staticBackdrop]);

  return {
    ref, overlay, onCancel, onClick,
  };
}
