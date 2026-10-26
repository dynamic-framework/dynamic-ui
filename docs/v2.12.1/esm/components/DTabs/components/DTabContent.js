import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useTabContext, TabsStateContext } from '../TabContext.js';

function DTabContent({ tab, children, className, style, }) {
    const { isSelected } = useTabContext();
    if (!isSelected(tab)) {
        return null;
    }
    return (jsx("div", { className: classNames('tab-pane fade show active', className), id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab`, style: style, children: jsx(TabsStateContext.Provider, { value: undefined, children: children }) }));
}

export { DTabContent as default };
//# sourceMappingURL=DTabContent.js.map
