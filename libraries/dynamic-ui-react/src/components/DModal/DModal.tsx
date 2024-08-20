import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';

import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name: string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
  fullScreenFrom?: ModalFullScreenFrom;
  size?: ModalSize;
}>;

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

  const generateClasses = useMemo(() => ({
    'modal portal fade show': true,
    ...className && { [className]: true },
  }), [className]);

  const generateModalDialogClasses = useMemo(() => ({
    'modal-dialog': true,
    'modal-dialog-centered': !!centered,
    'modal-dialog-scrollable': !!scrollable,
    [fullScreenClass]: !!fullScreen,
    ...size && { [`modal-${size}`]: true },
  }), [fullScreenClass, centered, fullScreen, scrollable, size]);

  return (
    <div
      className={classNames(generateClasses)}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      style={style}
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
    </div>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
