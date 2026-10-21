import type { ReactNode } from 'react';

import DToastSlot from './DToastSlot';
import { toastsAt } from './store';

import type { ToastPlacement, ToastState } from './store';

type Props = {
  placement: ToastPlacement;
  state: ToastState<ReactNode>;
  reverseOrder: boolean;
};

/**
 * One corner of the screen, and the live region for everything in it.
 *
 * It is Bootstrap's `.toast-container`, so the z-index and the spacing between
 * stacked toasts keep coming from `--#{$prefix}toast-zindex` and
 * `--#{$prefix}toast-spacing`. What our stylesheet adds is the placement: the
 * `react-hot-toast` container positioned itself with inline styles, which is
 * the one thing a design system cannot theme.
 *
 * ## The live region is HERE, not on each toast
 *
 * Every `DToast` used to carry `role="alert" aria-live="assertive"`. A live
 * region inserted at the same moment as its content is frequently not
 * announced at all — the technology has to be watching the element before the
 * change happens. So the announcement came and went depending on timing, which
 * is the worst way for an accessibility feature to behave: it works when you
 * test it and not when it matters.
 *
 * The region is rendered for as long as the corner is in use and is empty
 * between toasts. `polite` rather than `assertive`: a confirmation is not
 * worth interrupting whatever a screen reader is in the middle of saying, and
 * a toast that must interrupt is a dialog.
 */
export default function DToastRegion({ placement, state, reverseOrder }: Props) {
  const entries = toastsAt(state, placement, reverseOrder);

  return (
    <div
      className="toast-container"
      data-placement={placement}
      role="status"
      aria-live="polite"
      /*
       * `false`, so each arriving toast is announced on its own rather than
       * the region re-reading every toast already in it every time one more
       * shows up.
       */
      aria-atomic="false"
    >
      {entries.map((entry) => <DToastSlot key={entry.id} entry={entry} />)}
    </div>
  );
}
