import classNames from 'classnames';
import { motion, type Transition, type Variants } from 'framer-motion';

import { useMemo, type PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';

import { useResponsiveProp, ResponsiveProp } from '../../hooks/useResponsiveProp';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name: string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom | ResponsiveProp;
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
  // Responsive openFrom/width/height resolution using useResponsiveProp
  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedOpenFrom = useMemo((): OffcanvasPositionToggleFrom => {
    if (typeof openFrom === 'string') return openFrom;
    return (responsivePropValue(openFrom) as OffcanvasPositionToggleFrom) ?? 'end';
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
      className={classNames(
        'offcanvas portal show',
        {
          [`offcanvas-${resolvedOpenFrom}`]: resolvedOpenFrom,
        },
        className,
      )}
      style={{
        ...style,
        transition: 'none',
        ...(resolvedWidth && { [`--${PREFIX_BS}offcanvas-width`]: resolvedWidth }),
        ...(resolvedHeight && { [`--${PREFIX_BS}offcanvas-height`]: resolvedHeight }),
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
      {...staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
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
