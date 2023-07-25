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
import { PREFIX_BS } from '@dynamic-framework/ui';

import type { PropsWithChildren, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';
import type { ComponentSize } from '@dynamic-framework/ui';

export type MTooltipProps = PropsWithChildren<{
  classNameContainer?: string;
  className?: string;
  offSet?: number;
  padding?: number;
  withHover?: boolean;
  withFocus?: boolean;
  withClick?: boolean;
  isOpen?: boolean;
  size?: ComponentSize;
  placement?: Placement;
  Component: ReactNode;
}>;

const TOOLTIP_FONT_SIZE_BY_SIZE = {
  sm: `var(--${PREFIX_BS}ref-fs-subparagraph)`,
  default: `var(--${PREFIX_BS}body-font-size)`,
  lg: `var(--${PREFIX_BS}ref-fs-6)`,
};
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;

export default function MTooltip({
  classNameContainer,
  className,
  offSet = ARROW_HEIGHT + GAP,
  padding,
  withFocus = false,
  withClick = false,
  withHover = true,
  isOpen = false,
  placement = 'top',
  size,
  Component,
  children,
}: MTooltipProps) {
  const [open, setOpen] = useState(isOpen);
  const styleVariables = useMemo(() => {
    const defaultFontSize = size
      ? TOOLTIP_FONT_SIZE_BY_SIZE[size]
      : TOOLTIP_FONT_SIZE_BY_SIZE.default;
    return {
      background: `var(--${PREFIX_BS}m-tooltip-bg, var(--${PREFIX_BS}m-tooltip-component-bg, var(--${PREFIX_BS}secondary)))`,
      borderRadius: `var(--${PREFIX_BS}m-tooltip-border-radius, var(--${PREFIX_BS}m-tooltip-component-border-radius, var(--${PREFIX_BS}border-radius)))`,
      color: `var(--${PREFIX_BS}m-tooltip-color, var(--${PREFIX_BS}m-tooltip-component-color, var(--${PREFIX_BS}white)))`,
      fontSize: `var(--${PREFIX_BS}m-tooltip-font-size, var(--${PREFIX_BS}m-tooltip-component-font-size, ${defaultFontSize}))`,
      padding: `var(--${PREFIX_BS}m-tooltip-padding, var(--${PREFIX_BS}m-tooltip-component-padding, var(--${PREFIX_BS}ref-spacer-2)))`,
      maxWidth: `var(--${PREFIX_BS}m-tooltip-max-width, var(--${PREFIX_BS}m-tooltip-component-max-width, 300px))`,
    };
  }, [size]);

  const arrowRef = useRef(null);
  const {
    refs,
    context,
    floatingStyles,
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

  return (
    <>
      <div
        className={className}
        ref={refs.setReference}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getReferenceProps()}
      >
        {Component}
      </div>
      <FloatingPortal>
        {open && (
          <div
            className={classNameContainer}
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              ...styleVariables,
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              style={{
                fill: styleVariables.background,
              }}
              width={ARROW_WIDTH}
              height={ARROW_HEIGHT}
            />
            {children}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
