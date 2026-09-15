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
 * The `jsx-a11y` rules below assume a click handler is being used to make a
 * non-interactive element interactive, which then owes the keyboard an
 * equivalent. This handler does the opposite: it suppresses the click a label
 * forwards to its control when that click was meant for a trigger inside the
 * label. There is nothing to mirror for the keyboard, because the forwarding
 * being suppressed is a pointer behaviour — a keyboard user reaches the nested
 * trigger directly and activates it without the label involved.
 */
export default function DFormLabel({ htmlFor, className, children }: Props) {
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
       jsx-a11y/no-noninteractive-element-interactions */
    <label
      htmlFor={htmlFor}
      className={className}
      onClick={labelClickGuard}
    >
      {children}
    </label>
  );
}
