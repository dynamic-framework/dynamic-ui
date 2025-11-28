import classNames from 'classnames';
import { motion, type Transition, type Variants } from 'framer-motion';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name: string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom;
  // Agregar prop de transition
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

const transition: Transition = {
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
    children,
    dataAttributes,
  }: Props,
) {
  return (
    <motion.div
      className={classNames(
        'offcanvas portal show',
        {
          [`offcanvas-${openFrom}`]: openFrom,
        },
        className,
      )}
      style={{
        ...style,
        transition: 'none',
      }}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      custom={openFrom}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        ...transition,
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
