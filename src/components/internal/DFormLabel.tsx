import type { ReactNode } from 'react';

import labelClickGuard from '../../utils/labelClickGuard';

type Props = {
  htmlFor: string;
  className?: string;
  children: ReactNode;
};

/**
 * The `<label>` every form control renders, with the click guard already wired.
 *
 * Internal: it exists so the guard — and the lint exception it needs — lives in
 * one place instead of being repeated across every input component.
 *
 * The guard runs in the capture phase, not on bubble: a tooltip or modal
 * trigger that calls `stopPropagation()` in its own handler — a common pattern —
 * would otherwise keep the guard from ever running, and the browser would go on
 * to activate the labelled control. Confirmed in Chromium, where the same
 * trigger toggles the control with a bubble-phase guard and does not with this
 * one. Capturing changes nothing else: `preventDefault` applies to the default
 * action, which is evaluated after propagation either way.
 *
 * The `jsx-a11y` rules below assume a click handler is being used to make a
 * non-interactive element interactive, which then owes the keyboard an
 * equivalent. This handler does the opposite: it suppresses a pointer-only
 * behaviour, the click a label forwards to its control, and adds no way to
 * activate anything. Keyboard support for a nested trigger is the consumer's:
 * `<a href>` carries its own, while a `span` with a role and a tabindex is
 * focusable but inert until they handle Enter and Space themselves.
 */
export default function DFormLabel({ htmlFor, className, children }: Props) {
  /**
   * React 19 renders a bigint child; React 18 throws on one, and this package
   * supports both (`react: >=18 <20`). The label helpers count bigint as text
   * because that is what it draws as, so it is turned into its string form here
   * — the one place every control's label passes through — rather than pushing
   * a version check onto consumers.
   *
   * Only a bigint at the top level: one buried inside an array or a fragment is
   * the consumer's own React child, and normalising it would mean walking and
   * rebuilding the whole subtree.
   */
  const content = typeof children === 'bigint' ? String(children) : children;

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
       jsx-a11y/no-noninteractive-element-interactions */
    <label
      htmlFor={htmlFor}
      className={className}
      onClickCapture={labelClickGuard}
    >
      {content}
    </label>
  );
}
