import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DSelectLoadingIndicator({ innerProps, }) {
    return (jsx("div", Object.assign({ className: classNames({
            'd-select__indicator': true,
            'd-select__loading-indicator': true,
        }) }, innerProps, { children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })));
}

export { DSelectLoadingIndicator as default };
//# sourceMappingURL=DSelectLoadingIndicator.js.map
