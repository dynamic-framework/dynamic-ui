import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { components } from 'react-select';

function DSelectOptionEmoji(_a) {
    var { children, data } = _a, props = __rest(_a, ["children", "data"]);
    return (jsxs(components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsx("span", { children: data.emoji }), jsx("span", { children: children })] })));
}

export { DSelectOptionEmoji as default };
//# sourceMappingURL=DSelectOptionEmoji.js.map
