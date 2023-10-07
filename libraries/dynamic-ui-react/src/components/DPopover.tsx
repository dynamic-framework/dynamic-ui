import { useCallback, useEffect, useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from '@floating-ui/react';

import type { PropsWithChildren, ReactElement } from 'react';

type Props = PropsWithChildren<{
  renderComponent: (isOpen: boolean) => ReactElement;
  isOpen: boolean,
  setEventIsOpen?: (isOpen: boolean) => void
}>;

export default function DPopover(
  {
    children,
    renderComponent,
    isOpen,
    setEventIsOpen,
  }: Props,
) {
  const [innerIsOpen, setInnerIsOpen] = useState(false);

  useEffect(() => {
    setInnerIsOpen(isOpen);
  }, [isOpen]);

  const onOpenChange = useCallback((value: boolean) => {
    setInnerIsOpen(value);
    if (setEventIsOpen) {
      setEventIsOpen(value);
    }
  }, [setEventIsOpen]);

  const { refs, floatingStyles, context } = useFloating({
    open: innerIsOpen,
    onOpenChange,
    middleware: [
      offset(0),
      flip({ fallbackAxisSideDirection: 'none' }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const headingId = useId();

  return (
    <div className="d-popover">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {renderComponent(innerIsOpen)}
      </div>
      {innerIsOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="d-popover-content"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
}
