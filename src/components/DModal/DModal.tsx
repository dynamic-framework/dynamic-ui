import { useMemo } from 'react';
import classNames from 'classnames';
import { motion, type Transition } from 'framer-motion';

import type { PropsWithChildren } from 'react';

import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name:string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
  fullScreenFrom?: ModalFullScreenFrom;
  size?: ModalSize;
  transition?: Transition;
}>;

const defaultTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

function DModal(
  {
    name,
    className,
    style,
    staticBackdrop,
    scrollable,
    centered,
    fullScreen,
    fullScreenFrom,
    size,
    transition,
    children,
    dataAttributes,
  }: Props,
) {
  /**
   * 2.x split this across a `.modal` wrapper and a `.modal-dialog` child with
   * five modifier classes between them. The panel is one element with an
   * attribute per axis; `.df-overlay` is shared with the offcanvas, because
   * the two are the same panel anchored differently.
   */
  const dataProps = useMemo(() => ({
    'data-kind': 'modal',
    ...(size ? { 'data-size': size } : {}),
    ...(centered ? { 'data-centered': '' } : {}),
    ...(scrollable ? { 'data-scrollable': '' } : {}),
    ...(fullScreen ? { 'data-fullscreen': fullScreenFrom ?? '' } : {}),
  }), [size, centered, scrollable, fullScreen, fullScreenFrom]);

  return (
    <motion.div
      className={classNames('df-overlay', className)}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        ...(transition ?? defaultTransition),
        delay: 0.15,
      }}
      // `data-bs-backdrop` / `data-bs-keyboard` only ever meant something to
      // Bootstrap's JS, which the React build never imports — so `staticBackdrop`
      // has been inert here all along. Kept as a plain state attribute so the
      // prop stays honest and the behaviour layer has something to read.
      {...staticBackdrop && { 'data-static-backdrop': '' }}
      {...dataProps}
      {...dataAttributes}
    >
      {/* 2.x nested `.modal > .modal-dialog > .modal-content` — three elements
          where one carries the panel. */}
      {children}
    </motion.div>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
