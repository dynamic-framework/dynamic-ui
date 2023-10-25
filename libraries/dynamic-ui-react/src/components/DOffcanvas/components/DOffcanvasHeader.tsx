import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  showCloseButton?: boolean;
  onClose?: () => void;
}>;

export default function DOffcanvasHeader(
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
      className={classNames('offcanvas-header', className)}
      style={style}
    >
      <div className="d-offcanvas-slot">
        {children}
      </div>
      {showCloseButton && (
        <button
          type="button"
          className="d-offcanvas-close"
          aria-label="Close"
          onClick={onClose}
        >
          <DIcon icon="x-lg" />
        </button>
      )}
    </div>
  );
}
