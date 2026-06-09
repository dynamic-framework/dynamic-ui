import { type ReactNode, useCallback, useState } from 'react';
import { useDPortalContext } from '../contexts';
import DModal from '../components/DModal';
import DButton from '../components/DButton';
import DInput from '../components/DInput';

export type ConfirmModalColor = 'primary' | 'danger' | 'warning';

export interface CriticalConfirmConfig {
  code: string;
  codeLabel?: string;
  inputPlaceholder?: string;
}

export interface UseConfirmModalConfig {
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: ConfirmModalColor;
  onConfirm: () => void | Promise<void>;
  /**
   * Callback opcional cuando se cierra desde cancelar/X.
   * Se ejecuta después del cierre interno del modal.
   */
  onClose?: () => void;
  critical?: CriticalConfirmConfig;
}

export interface ConfirmModalPayload extends UseConfirmModalConfig {
  onConfirmAction: () => Promise<void>;
}

type ConfirmModalPortalPayload = {
  render: (payload: ConfirmModalPayload) => ReactNode;
  payload: ConfirmModalPayload;
};

export interface UseConfirmModalReturn {
  open: () => void;
  close: () => void;
  isLoading: boolean;
}

function ConfirmModalPortal({ payload }: { payload: ConfirmModalPayload }) {
  const {
    title = 'Are you sure you want to proceed?',
    message = 'Please confirm if you want to continue with this action.',
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    confirmColor = 'primary',
    critical,
    onClose,
    onConfirmAction,
  } = payload;

  const { closePortal } = useDPortalContext<{ confirmModal: ConfirmModalPortalPayload }>();
  const [confirmationCode, setConfirmationCode] = useState('');
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClose = useCallback(() => {
    closePortal();
    queueMicrotask(() => {
      onClose?.();
    });
  }, [closePortal, onClose]);

  const isConfirmDisabled = Boolean(
    internalLoading
    || (critical && confirmationCode !== critical.code),
  );

  const handleConfirmClick = () => {
    setInternalLoading(true);
    onConfirmAction()
      .catch(() => undefined)
      .finally(() => {
        setInternalLoading(false);
      });
  };

  return (
    <DModal
      name="confirmModal"
      size="lg"
      centered
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
          onClick={handleClose}
          disabled={internalLoading}
          className="d-grid"
        />
        <DButton
          text={confirmLabel}
          color={confirmColor}
          onClick={handleConfirmClick}
          disabled={isConfirmDisabled}
          loading={internalLoading}
          className="d-grid"
        />
      </DModal.Footer>
    </DModal>
  );
}

/**
 * Hook para mostrar un modal de confirmación.
 * Maneja la lógica de estado y validación de código crítico internamente.
 * El modal se renderiza automáticamente a través del DPortalContext.
 *
 * @example
 * const confirm = useConfirmModal({
 *   title: 'Delete Account',
 *   message: 'This action cannot be undone.',
 *   critical: { code: 'DELETE ACCOUNT' },
 *   onConfirm: async () => { await deleteAccount(); },
 * });
 *
 * <DButton onClick={confirm.open} text="Delete" color="danger" />
 */
export default function useConfirmModal(
  config: UseConfirmModalConfig,
): UseConfirmModalReturn {
  let context;
  try {
    context = useDPortalContext<{
      confirmModal: ConfirmModalPortalPayload;
    }>();
  } catch (error) {
    throw new Error(
      'useConfirmModal must be used within a <DContextProvider>. '
      + 'Wrap your component tree with <DContextProvider> to use confirmation modals.',
    );
  }

  const { openPortal, closePortal } = context;
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = useCallback(() => {
    closePortal();
    queueMicrotask(() => {
      config.onClose?.();
    });
  }, [closePortal, config]);

  const handleConfirm = useCallback(
    async () => {
      setIsLoading(true);
      try {
        await config.onConfirm();
        closePortal();
      } catch {
        // Mantener el modal abierto en caso de error
      } finally {
        setIsLoading(false);
      }
    },
    [config, closePortal],
  );

  const open = useCallback(() => {
    const payload: ConfirmModalPayload = {
      ...config,
      onConfirmAction: handleConfirm,
    };

    openPortal('confirmModal', {
      render: (modalPayload) => <ConfirmModalPortal payload={modalPayload} />,
      payload,
    });
  }, [config, openPortal, handleConfirm]);

  return {
    open,
    close: handleClose,
    isLoading,
  };
}
