import { useCallback, useRef } from 'react';
import { useConfirmModalStore } from '../components/DConfirmModal/confirmModalStore';
import type { UseConfirmModalConfig, UseConfirmModalReturn } from '../components/DConfirmModal/types';

// Re-export types for convenience
export type {
  ConfirmModalColor,
  CriticalConfirmConfig,
  UseConfirmModalConfig,
  UseConfirmModalReturn,
} from '../components/DConfirmModal/types';

/**
 * Hook to display a confirmation modal.
 *
 * Renders via a dedicated portal node (`#d-confirm-modal-root`) mounted directly
 * on `document.body`, so the confirm modal always sits above any other modal or overlay.
 *
 * Requires `DContextProvider` wrapping your application so that
 * `DConfirmModalContainer` is present and listening.
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
  const store = useConfirmModalStore();
  const idRef = useRef<string>(`confirm-modal-${Math.random().toString(36).slice(2)}`);

  const close = useCallback(() => {
    store.remove(idRef.current);
    queueMicrotask(() => {
      config.onClose?.();
    });
  }, [store, config]);

  const open = useCallback(() => {
    const handleConfirmAction = async () => {
      try {
        await config.onConfirm();
        store.remove(idRef.current);
      } catch {
        // Keep modal open on error
      }
    };

    store.push({
      ...config,
      id: idRef.current,
      onConfirmAction: handleConfirmAction,
      onCloseAction: close,
    });
  }, [store, config, close]);

  return { open };
}
