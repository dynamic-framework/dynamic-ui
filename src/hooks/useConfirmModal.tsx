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
 * Renders into the portal node specified by `DConfirmModalContainer` (typically `#d-portal`).
 * The confirm modal floats above the portal stack and handles its own Escape key,
 * preventing interference with underlying modals.
 *
 * Requires both `DContextProvider` wrapping your application AND an explicit
 * `<DConfirmModalContainer nodeId="d-portal" />` mounted in your app.
 *
 * @example
 * function App() {
 *   return (
 *     <DContextProvider>
 *       <YourContent />
 *       <DConfirmModalContainer nodeId="d-portal" />
 *     </DContextProvider>
 *   );
 * }
 *
 * function MyComponent() {
 *   const confirm = useConfirmModal({
 *     title: 'Delete Account',
 *     message: 'This action cannot be undone.',
 *     critical: { code: 'DELETE ACCOUNT' },
 *     onConfirm: async () => { await deleteAccount(); },
 *   });
 *
 *   return <DButton onClick={confirm.open} text="Delete" color="danger" />;
 * }
 */
export default function useConfirmModal(
  config: UseConfirmModalConfig,
): UseConfirmModalReturn {
  const store = useConfirmModalStore();
  const idRef = useRef<string>(`confirm-modal-${Math.random().toString(36).slice(2)}`);

  /*
   * Reporting the dismissal is not the same moment as dropping the entry.
   *
   * These used to be one step, and dropping the entry unmounts the `<dialog>` —
   * which stops its exit transition dead, because an element removed from the
   * document stops transitioning. `framer-motion` used to paper over it by
   * holding the element through an `AnimatePresence` exit; with the animation in
   * CSS, the element itself has to be allowed to finish.
   *
   * So the modal is told to close, and `DConfirmModalUI` calls `remove` once the
   * element reports it is done. `onClose` still fires immediately — a consumer
   * waiting to know the user said no should not wait on an animation.
   */
  const close = useCallback(() => {
    queueMicrotask(() => {
      config.onClose?.();
    });
  }, [config]);

  const remove = useCallback(() => {
    store.remove(idRef.current);
  }, [store]);

  const open = useCallback(() => {
    const handleConfirmAction = async () => {
      // Rejecting keeps the modal open; `DConfirmModalUI` swallows it and
      // restores the button. Resolving starts the exit there.
      await config.onConfirm();
    };

    // Remove any existing entry with this id to prevent duplicates on re-entrancy
    store.remove(idRef.current);

    store.push({
      ...config,
      id: idRef.current,
      onConfirmAction: handleConfirmAction,
      onCloseAction: close,
      onRemoveAction: remove,
    });
  }, [store, config, close, remove]);

  return { open };
}
