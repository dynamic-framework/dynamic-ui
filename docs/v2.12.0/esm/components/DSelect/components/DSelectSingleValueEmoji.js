import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { components } from 'react-select';

function DSelectSingleValueEmoji(_a) {
    var { children, getValue } = _a, props = __rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsx(components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: value.emoji })));
}

export { DSelectSingleValueEmoji as default };
//# sourceMappingURL=DSelectSingleValueEmoji.js.map
