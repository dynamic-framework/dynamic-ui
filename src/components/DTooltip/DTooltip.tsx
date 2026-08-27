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
  /** CSS class applied to the wrapper element that surrounds `Component` (the trigger). */
  childrenClassName?: string;
  /**
   * Distance in pixels between the trigger and the floating tooltip.
   * Defaults to arrow height + gap.
   */
  offSet?: number;
  /** Virtual padding, in pixels, used to keep the tooltip within the viewport boundaries. */
  padding?: number;
  /** When true, the tooltip opens when the pointer hovers over the trigger element. */
  withHover?: boolean;
  /**
   * When true, the tooltip opens when the trigger element receives keyboard focus
   * (recommended for accessibility).
   */
  withFocus?: boolean;
  /** When true, the tooltip toggles open/closed when the trigger element is clicked. */
  withClick?: boolean;
  /** Controls the initial open state of the tooltip. */
  open?: boolean;
  /** Size of the tooltip content. Omit for the default size. */
  size?: ComponentSize;
  /**
   * Preferred position of the tooltip relative to the trigger element.
   * Flips automatically if there isn't enough space.
   */
  placement?: Placement;
  /**
   * Element that triggers the tooltip; the tooltip attaches its reference
   * and interaction handlers to this node.
   */
  Component: ReactNode;
}>;

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;

/**
 * Tooltip is an abstraction component that wraps any element (`Component`) and displays
 * floating contextual content (`children`) positioned relative to it using Floating UI.
 * Use it to add short, non-critical hints or descriptions triggered by hover, focus, or
 * click, without altering the surrounding layout.
 */
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
  const dismiss = useDismiss(context, { ancestorScroll: true });
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
      ...className && { [className]: true },
    }),
    [size, className],
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
