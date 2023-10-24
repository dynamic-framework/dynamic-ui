import type { PropsWithChildren } from 'react';

import DIcon from '../../DIcon';

type Props = PropsWithChildren<{
  showCloseButton?: boolean;
  onClose?: () => void;
}>;

export default function DModalHeader(
  {
    showCloseButton,
    onClose,
    children,
  }: Props,
) {
  return (
    <div className="modal-header">
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
      {children}
    </div>
  );
}
