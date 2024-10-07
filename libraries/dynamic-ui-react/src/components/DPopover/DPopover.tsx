import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
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
import { PREFIX_BS } from '../config';

type Props = BaseProps & PropsWithChildren<{
  /**
   * Component to render in call to action
   * @param {boolean} open
   * @returns {React.ReactElement}
   */
  renderComponent: (open: boolean) => ReactElement;
  open: boolean;
  setOpen?: (open: boolean) => void;
  adjustContentToRender?: boolean;
}>;

/**
 * @deprecated
 */
export default function DPopover(
  {
    children,
    renderComponent,
    open,
    setOpen,
    adjustContentToRender = false,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onOpenChange = useCallback((value: boolean) => {
    setIsOpen(value);
    if (setOpen) {
      setOpen(value);
    }
  }, [setOpen]);

  const {
    refs,
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
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

  const generateStyleVariables = useMemo(() => ({
    ...style,
    ...adjustContentToRender && {
      [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    },
  }), [style, adjustContentToRender]);

  return (
    <div
      className={classNames('d-popover', className)}
      style={generateStyleVariables}
      {...dataAttributes}
    >
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {renderComponent(isOpen)}
      </div>
      {isOpen && (
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
