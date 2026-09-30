import classNames from 'classnames';
import { motion, type Transition, type Variants } from 'framer-motion';

import { useMemo, type PropsWithChildren } from 'react';

import { PREFIX } from '../config';

import { useResponsiveProp, ResponsiveProp } from '../../hooks/useResponsiveProp';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type OffcanvasResponsivePlacement = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', OffcanvasPositionToggleFrom>>;

type Props = BaseProps & PropsWithChildren<{
  name: string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom | OffcanvasResponsivePlacement;
  /**
   * Overrides the offcanvas size on the `start`/`end` placements (defaults to `400px`).
   * Accepts any CSS length (e.g. `'320px'`, `'50vw'`, `'100%'`) or a `ResponsiveProp` object.
   */
  width?: string | ResponsiveProp;
  /**
   * Overrides the offcanvas size on the `top`/`bottom` placements (defaults to `100%`).
   * Accepts any CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.
   */
  height?: string | ResponsiveProp;
  transition?: Transition;
}>;

const variants: Variants = {
  hidden: (openFrom: OffcanvasPositionToggleFrom) => {
    const properties: {
      x?: string;
      y?: string;
    } = {};
    if (openFrom === 'start') {
      properties.x = '-100%';
    }
    if (openFrom === 'end') {
      properties.x = '100%';
    }
    if (openFrom === 'top') {
      properties.y = '-100%';
    }
    if (openFrom === 'bottom') {
      properties.y = '100%';
    }
    return properties;
  },
  visible: {
    x: 0,
    y: 0,
  },
};

const defaultTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

function DOffcanvas(
  {
    name,
    className,
    style,
    staticBackdrop,
    scrollable,
    openFrom = 'end',
    width,
    height,
    transition,
    children,
    dataAttributes,
  }: Props,
) {
  // Only subscribe to breakpoint-change listeners when a responsive object is
  // actually provided, avoiding unnecessary matchMedia subscriptions for the
  // common case of plain string values.
  const hasResponsiveProp = typeof openFrom === 'object'
    || typeof width === 'object'
    || typeof height === 'object';
  const { responsivePropValue } = useResponsiveProp(hasResponsiveProp);
  const resolvedOpenFrom = useMemo((): OffcanvasPositionToggleFrom => {
    if (typeof openFrom === 'string') return openFrom;
    return (responsivePropValue(openFrom) as OffcanvasPositionToggleFrom | undefined) ?? 'end';
  }, [responsivePropValue, openFrom]);
  const resolvedWidth = useMemo(() => {
    if (!width) return undefined;
    if (typeof width === 'string') return width;
    return responsivePropValue(width);
  }, [responsivePropValue, width]);
  const resolvedHeight = useMemo(() => {
    if (!height) return undefined;
    if (typeof height === 'string') return height;
    return responsivePropValue(height);
  }, [responsivePropValue, height]);

  return (
    <motion.div
      // Same `.df-overlay` block as the modal: they are one panel anchored
      // differently, which is what `data-from` says. 2.x had `.offcanvas` with
      // four `offcanvas-{edge}` modifiers and its own token set.
      className={classNames('df-overlay', className)}
      data-kind="offcanvas"
      data-from={resolvedOpenFrom}
      style={{
        ...style,
        transition: 'none',
        // One slot for both axes: a left/right panel reads it as a width, a
        // top/bottom one as a height, and the stylesheet decides which.
        ...((resolvedWidth || resolvedHeight)
          && { [`--${PREFIX}overlay-size`]: resolvedWidth ?? resolvedHeight }),
      }}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      custom={resolvedOpenFrom}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        ...(transition ?? defaultTransition),
        delay: 0.15,
      }}
      // See DModal: these were Bootstrap-JS config attributes and have never
      // done anything in the React build. Plain state attributes now.
      {...staticBackdrop && { 'data-static-backdrop': '' }}
      {...scrollable && { 'data-scrollable': '' }}
      {...dataAttributes}
    >
      {children}
    </motion.div>
  );
}

export default Object.assign(DOffcanvas, {
  Header: DOffcanvasHeader,
  Body: DOffcanvasBody,
  Footer: DOffcanvasFooter,
});
