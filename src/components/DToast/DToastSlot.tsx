import { useCallback, useMemo } from 'react';

import type { ReactNode } from 'react';

import { DToastContext } from './DToastContext';
import { toastStore } from './toastStore';

import type { ToastEntry } from './store';

type Props = {
  entry: ToastEntry<ReactNode>;
};

/**
 * One toast's wrapper: its state, its motion, and its context.
 *
 * Its own component so the context value can be memoised per toast. Built
 * inline in the region, it was a new object on every store change — so every
 * arriving toast re-rendered the content of every toast already on screen,
 * which for a custom toast holding its own state is not just waste.
 *
 * The wrapper is also where `data-leaving` goes, because that is where the
 * stylesheet puts the transition. The vanilla build produces the same
 * `.df-toast-slot` around the same `.df-toast`, so one rule dresses both.
 */
export default function DToastSlot({ entry }: Props) {
  const { id, leaving } = entry;

  const hold = useCallback(() => toastStore.pause(id), [id]);
  const release = useCallback(() => toastStore.resume(id), [id]);

  const context = useMemo(
    () => ({ id, dismiss: () => toastStore.dismiss(id) }),
    [id],
  );

  return (
    <div
      className="df-toast-slot"
      {...leaving && { 'data-leaving': '' }}
      /*
       * Hovering holds the timer, and so does focus.
       *
       * A toast that vanishes while it is being read is the complaint everyone
       * has about toasts; WCAG 2.2.1 asks for the same thing. Focus counts
       * because tabbing to a toast's action must not start a race with its own
       * timer.
       */
      onPointerEnter={hold}
      onPointerLeave={release}
      onFocus={hold}
      onBlur={release}
      /*
       * The exit ends when the transition does, with the store's grace period
       * as the backstop. Removing on `transitionend` rather than on a timer
       * means the entry goes when the animation is actually over, whatever
       * duration the stylesheet gives it.
       */
      onTransitionEnd={() => {
        if (leaving) toastStore.remove(id);
      }}
    >
      <DToastContext.Provider value={context}>
        {entry.content}
      </DToastContext.Provider>
    </div>
  );
}
