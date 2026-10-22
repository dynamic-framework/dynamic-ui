import {
  useCallback, useEffect, useMemo, useRef,
} from 'react';

import type {
  FocusEvent, PointerEvent, ReactNode, TransitionEvent,
} from 'react';

import { DToastContext } from './DToastContext';
import { toastStore } from './toastStore';

import type { ToastEntry } from './store';

type Props = {
  entry: ToastEntry<ReactNode>;
};

/**
 * Whether the pointer or the focus went to something still inside the slot.
 *
 * `relatedTarget` is `null` when it went nowhere — out of the window, or to
 * nothing focusable — and `Node.contains(null)` throws rather than returning
 * `false` under jsdom's strict IDL conversion, so it is checked before use
 * rather than cast past.
 */
function movedWithin(
  slot: Element,
  related: EventTarget | null,
): boolean {
  return related instanceof Node && slot.contains(related);
}

/**
 * One toast's wrapper: its state, its motion, and its context.
 *
 * Its own component so the context value can be memoised per toast. Built
 * inline in the region, it was a new object on every store change — so every
 * arriving toast re-rendered the content of every toast already on screen,
 * which for a custom toast holding its own state is not just waste.
 *
 * The wrapper is also where `data-leaving` goes, because that is where the
 * stylesheet puts the transition. It wraps rather than decorating the toast
 * itself so that a custom toast — any `ReactNode`, not necessarily a
 * `.toast` — animates in and out the same way the default layout does.
 */
export default function DToastSlot({ entry }: Props) {
  const { id, leaving } = entry;

  /*
   * Hovering holds the timer, and so does focus — but they are two reasons for
   * ONE hold, not two independent ones.
   *
   * Tracked here rather than left to the store because only this component can
   * see both: a toast that is hovered AND focused used to pause twice, and
   * `pause` subtracts the time since the countdown started, so the same
   * stretch was subtracted twice. Then whichever ended first — moving the
   * pointer away while the dismiss button still had focus — resumed a timer
   * that was already short, and the toast vanished out from under the
   * keyboard.
   *
   * Refs rather than state: nothing here should re-render the toast's content.
   */
  const hovered = useRef(false);
  const focused = useRef(false);

  /**
   * This slot instance's identity, so the hold it takes is its own.
   *
   * A toast whose placement changes moves to another region, which unmounts
   * this element and mounts a fresh one — and an unmounting element emits no
   * pointer-leave and no blur, so without releasing it the store would keep a
   * hold nobody can ever let go of and the toast would sit there forever. The
   * replacement starts with both refs `false`, so it cannot release it either.
   *
   * Naming the holder is what makes the release safe: the two slots hold under
   * different identities, so releasing the dead one's hold cannot clear the
   * one its replacement may already have taken.
   */
  const holder = useRef({}).current;

  const sync = useCallback(() => {
    if (hovered.current || focused.current) {
      toastStore.pause(id, holder);
    } else {
      toastStore.resume(id, holder);
    }
  }, [id, holder]);

  useEffect(() => {
    sync();
    return () => { toastStore.resume(id, holder); };
  }, [id, holder, sync]);

  const onPointerEnter = useCallback(() => {
    hovered.current = true;
    sync();
  }, [sync]);

  const onPointerLeave = useCallback((event: PointerEvent<HTMLDivElement>) => {
    /* A pointer moving onto a child has not left the slot. */
    if (movedWithin(event.currentTarget, event.relatedTarget)) return;
    hovered.current = false;
    sync();
  }, [sync]);

  /*
   * `onFocus` and `onBlur` are focusin/focusout, so they fire for descendants
   * too — tabbing from a toast's action to its dismiss button would otherwise
   * read as "left the toast" and restart the countdown mid-interaction.
   */
  const onFocus = useCallback(() => {
    focused.current = true;
    sync();
  }, [sync]);

  const onBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
    if (movedWithin(event.currentTarget, event.relatedTarget)) return;
    focused.current = false;
    sync();
  }, [sync]);

  /*
   * The exit ends when the SLOT's transition does, with the store's grace
   * period as the backstop. Removing on `transitionend` rather than on a timer
   * means the entry goes when the animation is actually over, whatever
   * duration the stylesheet gives it — but the event bubbles, so a transition
   * finishing anywhere inside a custom toast would otherwise cut the slot's
   * own exit short.
   */
  const onTransitionEnd = useCallback((event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (leaving) toastStore.remove(id);
  }, [id, leaving]);

  const context = useMemo(
    () => ({ id, dismiss: () => toastStore.dismiss(id) }),
    [id],
  );

  return (
    <div
      className="toast-slot"
      {...leaving && { 'data-leaving': '' }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onTransitionEnd={onTransitionEnd}
    >
      <DToastContext.Provider value={context}>
        {entry.content}
      </DToastContext.Provider>
    </div>
  );
}
