/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';
import { FullScreenFrom, ModalSize } from '../interfaces/DModalInterface';
import { PREFIX_BS } from '../interfaces/component-config';

type Props = PropsWithChildren<{
  name: string;
  className?: string;
  isStatic?: boolean;
  isScrollable?: boolean;
  isCentered?: boolean;
  isFullScreen?: boolean;
  fullScreenFrom?: FullScreenFrom;
  modalSize?: ModalSize;
}>;

export default function DModal({
  name,
  className = '',
  isStatic,
  isScrollable,
  isCentered,
  isFullScreen,
  fullScreenFrom,
  modalSize,
  children,
}: Props) {
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
    [`modal-${modalSize!}`]: !!modalSize,
    [fullScreenClass]: !!isFullScreen,
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
