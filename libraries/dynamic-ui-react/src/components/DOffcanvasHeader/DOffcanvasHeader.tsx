import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

type Props = PropsWithChildren<{
  showCloseButton?: boolean;
  onClose?: () => void;
}>;

export default function DOffcanvasHeader(
  {
    showCloseButton,
    onClose,
    children,
  }: Props,
) {
  return (
    <div
      className="offcanvas-header"
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
