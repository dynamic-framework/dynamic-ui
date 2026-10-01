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
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, []);

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
