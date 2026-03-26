import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  cloneElement,
  isValidElement,
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

import type { ReactElement, HTMLProps, PropsWithChildren } from 'react';
import type { BaseProps } from '../interface';
import { PREFIX_BS } from '../config';

type Props = BaseProps & PropsWithChildren<{
  renderComponent: (open: boolean) => ReactElement;
  open: boolean;
  setOpen?: (open: boolean) => void;
  adjustContentToRender?: boolean;
}>;

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
    setOpen?.(value);
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
    ...(adjustContentToRender && {
      [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    }),
  }), [style, adjustContentToRender]);

  const triggerElement = renderComponent(isOpen) as ReactElement<HTMLProps<Element>>;

  if (!isValidElement(triggerElement)) {
    throw new Error('renderComponent must return a valid React element');
  }

  const reference = cloneElement(triggerElement, {
    ref: refs.setReference,
    ...getReferenceProps(triggerElement.props),
  });

  return (
    <div
      className={classNames('d-popover', className)}
      style={generateStyleVariables}
      {...dataAttributes}
    >
      {reference}

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
