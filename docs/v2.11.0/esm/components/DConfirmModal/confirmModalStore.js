import { useContext, createContext } from 'react';

function createConfirmModalStore() {
    const listeners = new Set();
    let entries = [];
    function notify() {
        listeners.forEach((listener) => listener([...entries]));
    }
    const store = {
        subscribe(listener) {
            listeners.add(listener);
            listener([...entries]);
            return () => {
                listeners.delete(listener);
            };
        },
        push(entry) {
            entries = [...entries, entry];
            notify();
        },
        remove(id) {
            entries = entries.filter((e) => e.id !== id);
            notify();
        },
    };
    return store;
}
const ConfirmModalStoreContext = createContext(null);
function useConfirmModalStore() {
    const store = useContext(ConfirmModalStoreContext);
    if (!store) {
        throw new Error('useConfirmModal must be used within a <DContextProvider>.');
    }
    return store;
}

export { ConfirmModalStoreContext, createConfirmModalStore, useConfirmModalStore };
//# sourceMappingURL=confirmModalStore.js.map
