import { useState, useRef, useMemo } from 'react';
import {
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useClick,
  useDismiss,
  useFocus,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  FloatingPortal,
  FloatingArrow,
} from '@floating-ui/react';
import classNames from 'classnames';

import type { PropsWithChildren, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';

import type { BaseProps, ComponentSize } from '../interface';

export type Props = BaseProps & PropsWithChildren<{
  childrenClassName?: string;
  offSet?: number;
  padding?: number;
  withHover?: boolean;
  withFocus?: boolean;
  withClick?: boolean;
  open?: boolean;
  theme?: string;
  size?: ComponentSize;
  placement?: Placement;
  Component: ReactNode;
}>;

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;

export default function DTooltip(
  {
    className,
    childrenClassName,
    style,
    offSet = ARROW_HEIGHT + GAP,
    padding,
    withFocus = false,
    withClick = false,
    withHover = true,
    open = false,
    theme = 'primary',
    placement = 'top',
    size,
    Component,
    children,
  }: Props,
) {
  const [isOpen, setIsOpen] = useState(open);
  const arrowRef = useRef(null);
  const {
    refs,
    context,
    floatingStyles,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offSet),
      flip(),
      shift({
        padding,
      }),
      arrow({
        element: arrowRef,
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

  const generateClasses = useMemo(
    () => ({
      'tooltip show': true,
      [`tooltip-${size}`]: !!size,
      [`tooltip-${theme}`]: !!theme,
      ...className && { [className]: true },
    }),
    [size, theme, className],
  );

  return (
    <>
      <div
        className={childrenClassName}
        ref={refs.setReference}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getReferenceProps()}
      >
        {Component}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            className={classNames(generateClasses)}
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              ...style,
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={ARROW_WIDTH}
              height={ARROW_HEIGHT}
            />
            <div className="tooltip-inner">
              {children}
            </div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
