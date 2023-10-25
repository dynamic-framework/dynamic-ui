import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
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
import type { BaseProps } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  renderComponent: (isOpen: boolean) => ReactElement;
  isOpen: boolean;
  setEventIsOpen?: (isOpen: boolean) => void;
  adjustContentToRender?: boolean;
}>;

export default function DPopover(
  {
    children,
    renderComponent,
    isOpen,
    setEventIsOpen,
    adjustContentToRender = false,
    className,
    style,
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
    <div
      className={classNames('d-popover', className)}
      style={style}
    >
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {renderComponent(innerIsOpen)}
      </div>
      {innerIsOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={classNames(
              'd-popover-content',
              {
                'w-100': adjustContentToRender,
              },
            )}
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
