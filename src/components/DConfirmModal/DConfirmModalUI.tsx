import {
  useState,
  useCallback,
} from 'react';
import DModal from '../DModal';
import DButton from '../DButton';
import DInput from '../DInput';
import type { ConfirmModalEntry } from './confirmModalStore';

type Props = {
  entry: ConfirmModalEntry;
};

export default function DConfirmModalUI({ entry }: Props) {
  const {
    title = 'Are you sure you want to proceed?',
    message = 'Please confirm if you want to continue with this action.',
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    confirmColor = 'primary',
    critical,
    onConfirmAction,
    onCloseAction,
  } = entry;

  const [confirmationCode, setConfirmationCode] = useState('');
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClose = useCallback(() => {
    onCloseAction();
  }, [onCloseAction]);

  const isConfirmDisabled = Boolean(
    internalLoading
    || (critical && confirmationCode !== critical.code),
  );

  const handleConfirmClick = useCallback(() => {
    setInternalLoading(true);
    onConfirmAction()
      .catch(() => undefined)
      .finally(() => {
        setInternalLoading(false);
      });
  }, [onConfirmAction]);

  return (
    <DModal
      name="dConfirmModal"
      size="lg"
      className={`confirm-modal ${critical ? 'critical-modal' : ''}`}
    >
      <DModal.Header onClose={handleClose} showCloseButton>
        <h5 className="fw-bold">{title}</h5>
      </DModal.Header>

      <DModal.Body className="py-3 px-5">
        <p className="mb-4">{message}</p>

        {critical && (
          <DInput
            type="text"
            label={critical.codeLabel || 'Confirmation code'}
            placeholder={critical.inputPlaceholder}
            value={confirmationCode}
            onChange={(value) => setConfirmationCode(value)}
            className="mb-4"
            autoFocus
          />
        )}
      </DModal.Body>

      <DModal.Footer>
        <DButton
          text={cancelLabel}
          variant="outline"
          color="secondary"
          onClick={handleClose}
          disabled={internalLoading}
        />
        <DButton
          text={confirmLabel}
          color={confirmColor}
          onClick={handleConfirmClick}
          disabled={isConfirmDisabled}
          loading={internalLoading}
        />
      </DModal.Footer>
    </DModal>
  );
}
