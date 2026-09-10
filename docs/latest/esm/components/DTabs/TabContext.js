import { useContext, createContext } from 'react';

const TabContext = createContext(undefined);
function useTabContext() {
    const context = useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTabContext was used outside of MTab');
    }
    return context;
}

export { TabContext as default, useTabContext };
//# sourceMappingURL=TabContext.js.map
