import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { components } from 'react-select';

function DSelectOptionCheck(_a) {
    var { children, isSelected } = _a, props = __rest(_a, ["children", "isSelected"]);
    return (jsxs(components.Option, Object.assign({}, props, { isSelected: isSelected, className: classNames('d-select__option'), children: [jsx("span", { className: classNames('d-select__check', {
                    'd-select__check--selected': isSelected,
                }), "aria-hidden": "true" }), jsx("span", { className: "d-select__label", children: children })] })));
}

export { DSelectOptionCheck as default };
//# sourceMappingURL=DSelectOptionCheck.js.map
