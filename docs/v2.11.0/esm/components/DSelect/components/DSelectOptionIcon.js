import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { components } from 'react-select';
import DIcon from '../../DIcon/DIcon.js';

function DSelectOptionIcon(_a) {
    var { children, data } = _a, props = __rest(_a, ["children", "data"]);
    return (jsxs(components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsx(DIcon, { icon: data.icon }), children] })));
}

export { DSelectOptionIcon as default };
//# sourceMappingURL=DSelectOptionIcon.js.map
