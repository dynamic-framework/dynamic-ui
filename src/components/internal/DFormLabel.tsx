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
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
       jsx-a11y/no-noninteractive-element-interactions */
    <label
      htmlFor={htmlFor}
      className={className}
      onClickCapture={labelClickGuard}
    >
      {children}
    </label>
  );
}
