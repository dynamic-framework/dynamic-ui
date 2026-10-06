import { jsx, jsxs } from 'react/jsx-runtime';
import { useContext, useState, useCallback, useEffect, useMemo, useRef, Children } from 'react';
import classNames from 'classnames';
import TabContext, { TabsStateContext } from './TabContext.js';
import DTabContent from './components/DTabContent.js';
import DTabsProvider from './components/DTabsProvider.js';

function DTabs({ children, defaultSelected, onChange, options, className, classNameTab, classNameContent, style, vertical, variant = 'underline', dataAttributes, ariaLabel, ariaLabelledBy, }) {
    var _a;
    const shared = useContext(TabsStateContext);
    const [ownSelected, setOwnSelected] = useState(defaultSelected);
    const selected = shared
        ? shared.selected
        : ownSelected !== null && ownSelected !== void 0 ? ownSelected : (_a = options.find((opt) => !opt.disabled)) === null || _a === void 0 ? void 0 : _a.tab;
    const setSelected = shared ? shared.setSelected : setOwnSelected;
    const onSelect = useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    }, [onChange, setSelected]);
    useEffect(() => {
        setOwnSelected(defaultSelected);
    }, [defaultSelected]);
    const generateClasses = useMemo(() => (Object.assign({ nav: true, 'd-tabs-nav-vertical': vertical && variant !== 'tabs', [`nav-${variant}`]: true }, className && { [className]: true })), [vertical, variant, className]);
    const tabRefs = useRef([]);
    // Ensure selected is never disabled
    useEffect(() => {
        if (options.length === 0)
            return;
        const selectedOption = options.find((opt) => opt.tab === selected);
        if (selectedOption && selectedOption.disabled) {
            const firstEnabled = options.find((opt) => !opt.disabled);
            if (firstEnabled)
                setSelected(firstEnabled.tab);
        }
    }, [options, selected, setSelected]);
    // Focus only moves in response to the user: arrow keys and clicks call
    // this directly. Changes to `selected` that don't come from an interaction
    // (mount, a new `defaultSelected`, the disabled-tab fallback above) leave
    // focus where it is, so the page doesn't scroll to the tablist and no other
    // element (a search field, an OTP input) loses focus.
    const focusTab = useCallback((idx) => {
        var _a;
        (_a = tabRefs.current[idx]) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    const handleKeyDown = useCallback((idx, e) => {
        const count = options.length;
        if (count === 0)
            return;
        let next = idx;
        let prev = idx;
        if (e.key === 'ArrowRight' || (vertical && e.key === 'ArrowDown')) {
            e.preventDefault();
            for (let i = 0; i < count; i += 1) {
                next = (next + 1) % count;
                if (!options[next].disabled) {
                    focusTab(next);
                    setSelected(options[next].tab);
                    break;
                }
            }
        }
        if (e.key === 'ArrowLeft' || (vertical && e.key === 'ArrowUp')) {
            e.preventDefault();
            for (let i = 0; i < count; i += 1) {
                prev = (prev - 1 + count) % count;
                if (!options[prev].disabled) {
                    focusTab(prev);
                    setSelected(options[prev].tab);
                    break;
                }
            }
        }
    }, [options, vertical, focusTab, setSelected]);
    let tablistProps = {};
    if (ariaLabelledBy) {
        tablistProps = { 'aria-labelledby': ariaLabelledBy };
    }
    else if (ariaLabel) {
        tablistProps = { 'aria-label': ariaLabel };
    }
    const isSelected = useCallback((tab) => (selected === tab), [selected]);
    const value = useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsx(TabContext.Provider, { value: value, children: jsxs("div", Object.assign({ className: classNames({
                'd-tabs': true,
                'd-tabs-column': !vertical || variant === 'tabs',
            }), style: style }, dataAttributes, { children: [jsx("ul", Object.assign({ className: classNames(generateClasses), role: "tablist", "aria-orientation": vertical ? 'vertical' : undefined }, tablistProps, { children: options.map((option, idx) => {
                        const isTabSelected = !!option.tab && option.tab === selected;
                        return (jsx("li", { role: "presentation", className: "nav-item", children: jsx("button", { ref: (element) => {
                                    tabRefs.current[idx] = element;
                                }, id: `${option.tab}Tab`, className: classNames('nav-link', { active: isTabSelected }, classNameTab), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": isTabSelected, tabIndex: isTabSelected ? 0 : -1, disabled: option.disabled, onClick: () => {
                                    focusTab(idx);
                                    onSelect(option);
                                }, onKeyDown: (e) => handleKeyDown(idx, e), children: option.label }) }, option.tab));
                    }) })), Children.toArray(children).length > 0 && (jsx("div", { className: classNames('d-tabs-content tab-content', classNameContent), children: children }))] })) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
    Provider: DTabsProvider,
});

export { DTabs$1 as default };
//# sourceMappingURL=DTabs.js.map
