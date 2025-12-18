import { useMemo } from 'react';
import classNames from 'classnames';
import { motion, type Transition } from 'framer-motion';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';
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
  const fullScreenClass = useMemo(() => {
    if (fullScreen) {
      if (fullScreenFrom) {
        return `modal-fullscreen-${fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }, [fullScreenFrom, fullScreen]);

  const generateModalDialogClasses = useMemo(() => ({
    'modal-dialog': true,
    'modal-dialog-centered': !!centered,
    'modal-dialog-scrollable': !!scrollable,
    [fullScreenClass]: !!fullScreen,
    ...size && { [`modal-${size}`]: true },
  }), [fullScreenClass, centered, fullScreen, scrollable, size]);

  return (
    <motion.div
      className={classNames('modal portal show', className)}
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
      {...staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...dataAttributes}
    >
      <div className={classNames(generateModalDialogClasses)}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
