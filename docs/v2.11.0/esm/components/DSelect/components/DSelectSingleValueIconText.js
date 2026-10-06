import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { components } from 'react-select';
import DIcon from '../../DIcon/DIcon.js';

function DSelectSingleValueIconText(_a) {
    var { children, getValue } = _a, props = __rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxs(components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: [jsx(DIcon, { icon: value.icon }), children] })));
}

export { DSelectSingleValueIconText as default };
//# sourceMappingURL=DSelectSingleValueIconText.js.map
