import { jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback, useMemo } from 'react';
import TabContext, { TabsStateContext } from '../TabContext.js';

/**
 * Owns the selected tab so the tab bar (`DTabs`) and its panels (`DTabs.Tab`)
 * can live anywhere inside it, e.g. the bar in a header and the panels in
 * another column.
 */
function DTabsProvider({ defaultSelected, children, }) {
    const [selected, setSelected] = useState(defaultSelected);
    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = useCallback((tab) => (selected === tab), [selected]);
    const state = useMemo(() => ({ selected, setSelected }), [selected]);
    const value = useMemo(() => ({ isSelected }), [isSelected]);
    return (jsx(TabsStateContext.Provider, { value: state, children: jsx(TabContext.Provider, { value: value, children: children }) }));
}

export { DTabsProvider as default };
//# sourceMappingURL=DTabsProvider.js.map
