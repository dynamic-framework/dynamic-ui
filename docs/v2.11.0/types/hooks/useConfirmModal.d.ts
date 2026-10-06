import type { UseConfirmModalConfig, UseConfirmModalReturn } from '../components/DConfirmModal/types';
export type { ConfirmModalColor, CriticalConfirmConfig, UseConfirmModalConfig, UseConfirmModalReturn, } from '../components/DConfirmModal/types';
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
export default function useConfirmModal(config: UseConfirmModalConfig): UseConfirmModalReturn;
