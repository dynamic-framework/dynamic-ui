/**
 * Configuration options for useConfirmModal hook
 */
export interface CriticalConfirmConfig {
  code: string;
  codeLabel?: string;
  inputPlaceholder?: string;
}

export type ConfirmModalColor = 'primary' | 'danger' | 'warning';

export interface UseConfirmModalConfig {
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: ConfirmModalColor;
  onConfirm: () => void | Promise<void>;
  onClose?: () => void;
  critical?: CriticalConfirmConfig;
}

/**
 * Entry in the confirm modal store
 */
export type ConfirmModalEntry = UseConfirmModalConfig & {
  id: string;
  /**
   * Runs the consumer's `onConfirm`. Rejects if it threw, which keeps the modal
   * open.
   *
   * It does NOT drop the entry. Dropping it unmounts the `<dialog>`, and an
   * element removed from the document stops transitioning — so the modal
   * vanished on the frame the action succeeded instead of animating out. The UI
   * closes the element and calls `onRemoveAction` once the exit is over.
   */
  onConfirmAction: () => Promise<void>;
  /**
   * Reports that the user dismissed it, firing the consumer's `onClose`.
   *
   * Also does not drop the entry — same reason. "Dismissed" and "gone" are two
   * moments with an animation between them.
   */
  onCloseAction: () => void;
  /** Drops the entry. Called by the UI once the dialog has finished leaving. */
  onRemoveAction: () => void;
};

/**
 * Listener function for store subscription
 */
export type Listener = (entries: ConfirmModalEntry[]) => void;

/**
 * Confirm modal store interface
 */
export type ConfirmModalStore = {
  subscribe(listener: Listener): () => void;
  push(entry: ConfirmModalEntry): void;
  remove(id: string): void;
};

/**
 * Return type of useConfirmModal hook
 */
export interface UseConfirmModalReturn {
  open: () => void;
}
