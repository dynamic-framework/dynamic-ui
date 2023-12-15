import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  showCloseButton?: boolean;
  onClose?: () => void;
}>;

export default function DModalHeader(
  {
    showCloseButton,
    onClose,
    children,
    className,
    style,
  }: Props,
) {
  return (
    <div
      className={classNames('modal-header', className)}
      style={style}
    >
      <div className="d-modal-slot">
        {children}
      </div>
      {showCloseButton && (
        <button
          type="button"
          className="d-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <DIcon icon="x-lg" />
        </button>
      )}
    </div>
  );
}
