import { useContext, createContext } from 'react';

const TabContext = createContext(undefined);
const TabsStateContext = createContext(undefined);
function useTabContext() {
    const context = useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTabContext was used outside of DTabs');
    }
    return context;
}

export { TabsStateContext, TabContext as default, useTabContext };
//# sourceMappingURL=TabContext.js.map
