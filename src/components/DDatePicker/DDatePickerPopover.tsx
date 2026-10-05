import { useCallback, useId, useState } from 'react';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';

import type { ReactNode } from 'react';

type Props = {
  /** The field the panel hangs off. Receives the opening interactions. */
  renderTrigger: (props: {
    ref: (node: HTMLElement | null) => void;
    open: boolean;
  } & Record<string, unknown>) => ReactNode;
  children: (close: () => void) => ReactNode;
  /** Announced as the panel's name. */
  ariaLabel?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

/**
 * The panel a date field opens.
 *
 * Written against `@floating-ui/react` directly rather than through
 * `DPopover`, for two reasons that are both about this panel in particular:
 *
 * - it has to CLOSE when a date is chosen, which is not an interaction
 *   `DPopover` models — its content has no way to ask it to close;
 * - focus has to land inside on open and come back to the field on close,
 *   because a calendar is a grid and arriving outside it means the arrow keys
 *   do nothing until the reader finds their way in.
 *
 * `aria-label` rather than `aria-labelledby`: a dangling `aria-labelledby` is
 * not a fallback, it is ignored, and the panel is then announced as "dialog"
 * with no name at all.
 */
export default function DDatePickerPopover(
  {
    renderTrigger,
    children,
    ariaLabel = 'Choose a date',
    open: openProp,
    onOpenChange,
  }: Props,
) {
  const [uncontrolled, setUncontrolled] = useState(false);
  const open = openProp ?? uncontrolled;

  const setOpen = useCallback((next: boolean) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  }, [onOpenChange, openProp]);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [
      offset(4),
      /* Flip above when there is no room below — a calendar is tall, and a
         field near the bottom of a page is the common case, not the edge. */
      flip({ padding: 8 }),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const interactions = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: 'dialog' }),
  ]);

  const labelId = useId();

  return (
    <>
      {renderTrigger({
        ref: refs.setReference,
        open,
        ...interactions.getReferenceProps(),
      })}

      {open && (
        /*
         * `modal` traps Tab inside and returns focus to the field on close,
         * which is the behaviour a grid needs; `initialFocus` is left to the
         * manager so it lands on the calendar's own focusable day.
         */
        <FloatingFocusManager context={context} modal>
          <div
            className="df-floating"
            data-kind="popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-label={ariaLabel}
            id={labelId}
            {...interactions.getFloatingProps()}
          >
            {children(() => setOpen(false))}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
