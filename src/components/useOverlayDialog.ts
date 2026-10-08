import {
  useCallback, useEffect, useMemo,
} from 'react';

import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';
import useProvidedRefOrCreate from '../hooks/useProvidedRefOrCreate';

/**
 * Everything a `<dialog>` panel needs, in one place.
 *
 * `DModal` and `DOffcanvas` are two components in v2 and stay that way — they
 * keep their own Bootstrap markup, their own class names and their own props.
 * What they share is the PANEL BEHAVIOUR: opening with `showModal()`, vetoing
 * Escape for a static backdrop, detecting a click outside, naming the panel for
 * assistive technology, locking the page behind it. That part was written out
 * twice before and drifted — `DModalFooter` accepted an `actionPlacement` of
 * `center` and `DOffcanvasFooter` did not, for one element and one stylesheet.
 *
 * @param name - Panel id. Also seeds the label id the header writes.
 * @param staticBackdrop - Refuses both ways out: a click on the backdrop and Escape.
 * @param dialogRef - A ref the caller wants pointed at the element, so it can
 *   ask the panel to close rather than unmounting it. Unmounting stops the exit
 *   transition dead; `close()` lets it run and reports when it is over.
 */
export default function useOverlayDialog(
  {
    name,
    staticBackdrop,
    dialogRef,
  }: {
    name: string;
    staticBackdrop?: boolean;
    dialogRef?: React.RefObject<HTMLDialogElement | null>;
  },
) {
  const ref = useProvidedRefOrCreate<HTMLDialogElement>(dialogRef);
  const overlay = useMemo(() => ({ labelId: `${name}Label` }), [name]);

  /**
   * Opened with `showModal()`, which is the whole reason this is a `<dialog>`.
   *
   * Everything the hand-written version in `DPortalContext` implemented comes
   * with it, and three of those were broken:
   *
   * - **Focus moves into the panel** and is **restored to whatever opened it**.
   *   `openPortal` used to `blur()` the trigger, so focus went to `<body>` —
   *   its Tab trap never engaged from a cold start, and closing left a keyboard
   *   user at the top of the page.
   * - **The rest of the page is `inert`**, so a screen reader's virtual cursor
   *   cannot read it. A Tab trap never did that; browse mode does not use Tab.
   *   This is the single biggest accessibility difference, and no amount of
   *   `aria-modal` substitutes for it.
   * - **The top layer**, so no consumer `z-index` can cover it — and so the
   *   confirm modal no longer needs `$zindex-modal + 10` to sit above the
   *   stack.
   */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, [ref]);

  /* `<dialog>` does not lock the page behind it; that part stays ours. */
  useDisableBodyScrollEffect(true);

  /**
   * A static backdrop refuses Escape too.
   *
   * `cancel` fires for Escape and is the only chance to veto it — `close` is
   * after the fact. This is what `data-bs-keyboard="false"` was standing in for
   * while Bootstrap's JS was not on the page to read it.
   */
  const onCancel = useCallback((event: React.SyntheticEvent) => {
    if (staticBackdrop) event.preventDefault();
  }, [staticBackdrop]);

  /**
   * A click whose target is the dialog itself landed outside the panel.
   *
   * It covers both shapes v2 uses. For `DModal` the dialog is the full-viewport
   * `.modal` box and the panel is `.modal-content` inside it — Bootstrap
   * already makes `.modal-dialog` `pointer-events: none` so the gap around the
   * panel reports the `.modal` element. For `DOffcanvas` the dialog IS the
   * panel, and a click on its `::backdrop` is reported as a click on the dialog.
   * Either way, `event.target === ref.current` means "outside".
   */
  const onClick = useCallback((event: React.MouseEvent<HTMLDialogElement>) => {
    if (staticBackdrop || event.target !== ref.current) return;
    ref.current?.close();
  }, [ref, staticBackdrop]);

  return {
    ref, overlay, onCancel, onClick,
  };
}
