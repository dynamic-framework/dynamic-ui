import { createContext, useContext } from 'react';
import type {
  ConfirmModalEntry,
  Listener,
  ConfirmModalStore,
} from './types';

// Re-export types for backward compatibility
export type { ConfirmModalEntry, Listener, ConfirmModalStore } from './types';

export function createConfirmModalStore(): ConfirmModalStore {
  const listeners = new Set<Listener>();
  let entries: ConfirmModalEntry[] = [];

  function notify() {
    listeners.forEach((listener) => listener([...entries]));
  }

  const store: ConfirmModalStore = {
    subscribe(listener: Listener): () => void {
      listeners.add(listener);
      listener([...entries]);
      return () => {
        listeners.delete(listener);
      };
    },

    push(entry: ConfirmModalEntry): void {
      entries = [...entries, entry];
      notify();
    },

    remove(id: string): void {
      entries = entries.filter((e) => e.id !== id);
      notify();
    },
  };

  return store;
}

export const ConfirmModalStoreContext = createContext<ConfirmModalStore | null>(null);

export function useConfirmModalStore(): ConfirmModalStore {
  const store = useContext(ConfirmModalStoreContext);
  if (!store) {
    throw new Error('useConfirmModal must be used within a <DContextProvider>.');
  }
  return store;
}
