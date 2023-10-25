import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';

import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { ModalFullScreenFrom, ModalSize } from '../interface';

type Props = PropsWithChildren<{
  name: string;
  className?: string;
  isStatic?: boolean;
  isScrollable?: boolean;
  isCentered?: boolean;
  isFullScreen?: boolean;
  fullScreenFrom?: ModalFullScreenFrom;
  modalSize?: ModalSize;
}>;

function DModal(
  {
    name,
    className = '',
    isStatic,
    isScrollable,
    isCentered,
    isFullScreen,
    fullScreenFrom,
    modalSize,
    children,
  }: Props,
) {
  const fullScreenClass = useMemo(() => {
    if (isFullScreen) {
      if (fullScreenFrom) {
        return `modal-fullscreen-${fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }, [fullScreenFrom, isFullScreen]);

  const generateClasses = useMemo(() => ({
    'modal fade show': true,
    [`${className}`]: !!className,
  }), [className]);

  const generateModalDialogClasses = useMemo(() => ({
    'modal-dialog': true,
    'modal-dialog-centered': !!isCentered,
    'modal-dialog-scrollable': !!isScrollable,
    [fullScreenClass]: !!isFullScreen,
    ...modalSize && { [`modal-${modalSize}`]: true },
  }), [fullScreenClass, isCentered, isFullScreen, isScrollable, modalSize]);

  return (
    <div
      className={classNames(generateClasses)}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      {...isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
    >
      <div className={classNames(generateModalDialogClasses)}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
