import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { components } from 'react-select';
import { useMemo } from 'react';

function DSelectPlaceholder(_a) {
    var { selectProps, innerProps: innerPropsProp, children } = _a, props = __rest(_a, ["selectProps", "innerProps", "children"]);
    const id = useMemo(() => `${selectProps.inputId}Placeholder`, [selectProps.inputId]);
    const innerProps = useMemo(() => (Object.assign(Object.assign({}, innerPropsProp), { id })), [innerPropsProp, id]);
    return (jsx(components.Placeholder, Object.assign({ innerProps: innerProps, selectProps: selectProps }, props, { children: children })));
}

export { DSelectPlaceholder as default };
//# sourceMappingURL=DSelectPlaceholder.js.map
