/* eslint-disable react/jsx-props-no-spreading */
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

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  renderComponent: (isOpen: boolean) => JSX.Element;
  isOpen: boolean,
  setIsOpen?: (isOpen: boolean) => void
}>;

export default function MPopover(
  {
    children,
    renderComponent,
    isOpen,
    setIsOpen = () => {},
  }: Props,
) {
  const [innerIsOpen, setInnerIsOpen] = useState(false);

  useEffect(() => {
    setInnerIsOpen(isOpen);
  }, [isOpen]);

  const onOpenChange = useCallback((value: boolean) => {
    setInnerIsOpen(value);
    setIsOpen(value);
  }, [setIsOpen]);

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
    <div className="m-popover">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {renderComponent(innerIsOpen)}
      </div>
      {innerIsOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="m-popover-content"
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
