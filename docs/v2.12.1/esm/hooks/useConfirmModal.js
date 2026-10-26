import { useRef, useCallback } from 'react';
import { useConfirmModalStore } from '../components/DConfirmModal/confirmModalStore.js';

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
function useConfirmModal(config) {
    const store = useConfirmModalStore();
    const idRef = useRef(`confirm-modal-${Math.random().toString(36).slice(2)}`);
    const close = useCallback(() => {
        store.remove(idRef.current);
        queueMicrotask(() => {
            var _a;
            (_a = config.onClose) === null || _a === void 0 ? void 0 : _a.call(config);
        });
    }, [store, config]);
    const open = useCallback(() => {
        const handleConfirmAction = async () => {
            try {
                await config.onConfirm();
                store.remove(idRef.current);
            }
            catch (_a) {
                // Keep modal open on error
            }
        };
        // Remove any existing entry with this id to prevent duplicates on re-entrancy
        store.remove(idRef.current);
        store.push(Object.assign(Object.assign({}, config), { id: idRef.current, onConfirmAction: handleConfirmAction, onCloseAction: close }));
    }, [store, config, close]);
    return { open };
}

export { useConfirmModal as default };
//# sourceMappingURL=useConfirmModal.js.map
