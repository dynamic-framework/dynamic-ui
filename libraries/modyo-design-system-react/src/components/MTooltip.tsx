import { PropsWithChildren, ReactNode, useState } from 'react';
import {
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useFocus,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions';
import type { Placement } from '@floating-ui/react-dom-interactions';

export type MTooltipProps = PropsWithChildren<{
  classNameContainer?: string;
  className?: string;
  offSet?: number;
  padding?: number;
  withHover?: boolean;
  withFocus?: boolean;
  withClick?: boolean;
  placement?: Placement;
  Component: JSX.Element | ReactNode;
}>;

const DEFAULT_TOOLTIP_CLASSES = 'bg-tertiary rounded-1 p-2 text-white small';
const DEFAULT_BUTTON_CLASSES = 'bg-transparent border-0 p-0 text-decoration-underline';

export default function MTooltip({
  classNameContainer = DEFAULT_TOOLTIP_CLASSES,
  className = DEFAULT_BUTTON_CLASSES,
  offSet = 0,
  padding = 0,
  withFocus,
  withClick,
  withHover = true,
  placement = 'top',
  Component,
  children,
}: MTooltipProps) {
  const [open, setOpen] = useState(false);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offSet),
      flip(),
      shift({
        padding,
      }),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const click = useClick(context);

  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    withHover ? hover : undefined,
    withClick ? click : undefined,
    withFocus ? focus : undefined,
    dismiss,
    role,
  ]);

  return (
    <>
      <button
        className={className}
        type="button"
        ref={reference}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getReferenceProps()}
      >
        {Component}
      </button>
      <FloatingPortal>
        {open && (
          <div
            className={classNameContainer}
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getFloatingProps()}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
