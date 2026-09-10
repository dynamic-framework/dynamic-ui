import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect, useMemo, useRef, createRef } from 'react';
import classNames from 'classnames';
import TabContext from './TabContext.js';
import DTabContent from './components/DTabContent.js';

function DTabs({ children, defaultSelected, onChange, options, className, classNameTab, style, vertical, variant = 'underline', dataAttributes, ariaLabel, ariaLabelledBy, }) {
    const [selected, setSelected] = useState(defaultSelected);
    const onSelect = useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    }, [onChange]);
    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const generateClasses = useMemo(() => (Object.assign({ nav: true, 'd-tabs-nav-vertical': vertical && variant !== 'tabs', [`nav-${variant}`]: true }, className && { [className]: true })), [vertical, variant, className]);
    const tabRefs = useRef([]);
    // Always holds the latest `options` without needing to be a dependency:
    // `options` is commonly passed as an inline array literal (e.g.
    // `options={[{ label: 'SMS', tab: 'sms' }, ...]}`), so it's a new array
    // reference on every parent render even when its content hasn't changed.
    // Reading it from this ref (updated synchronously on every render) lets
    // the focus effect below react only to `selected` changing.
    const optionsRef = useRef(options);
    optionsRef.current = options;
    useEffect(() => {
        tabRefs.current = options.map((_, i) => tabRefs.current[i] || createRef());
    }, [options]);
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
    }, [options, selected]);
    // Declarative focus management. Wrapped in `useCallback` with an empty
    // dependency array since it only reads from the `tabRefs` ref, so its
    // identity stays stable across renders and it can safely be used as an
    // effect dependency below.
    const focusTab = useCallback((idx) => {
        var _a;
        if ((_a = tabRefs.current[idx]) === null || _a === void 0 ? void 0 : _a.current) {
            tabRefs.current[idx].current.focus();
        }
    }, []);
    // Focus selected tab when selected changes.
    // Reads `options` from `optionsRef` (see comment above) instead of
    // depending on `options` directly, so a parent re-render that merely
    // creates a new `options` reference with identical content doesn't call
    // `focusTab` again and steal focus away from unrelated elements on the
    // page (e.g. an OTP input).
    useEffect(() => {
        const idx = optionsRef.current.findIndex((opt) => opt.tab === selected && !opt.disabled);
        if (idx !== -1) {
            focusTab(idx);
        }
    }, [selected, focusTab]);
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
    }, [options, vertical, focusTab]);
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
                        return (jsx("li", { role: "presentation", className: "nav-item", children: jsx("button", { ref: tabRefs.current[idx], id: `${option.tab}Tab`, className: classNames('nav-link', { active: isTabSelected }, classNameTab), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": isTabSelected, tabIndex: isTabSelected ? 0 : -1, disabled: option.disabled, onClick: () => onSelect(option), onKeyDown: (e) => handleKeyDown(idx, e), children: option.label }) }, option.tab));
                    }) })), jsx("div", { className: "d-tabs-content tab-content", children: children })] })) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
});

export { DTabs$1 as default };
//# sourceMappingURL=DTabs.js.map
