import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';
import DListGroupItem from './components/DListGroupItem.js';
import ListGroupContext from './ListGroupContext.js';

function DListGroup({ as = 'ul', numbered, flush, horizontal, ariaLabel, ariaLabelledBy, children, className, style, dataAttributes, }) {
    const Tag = useMemo(() => {
        if (numbered) {
            return 'ol';
        }
        return as;
    }, [numbered, as]);
    const generateClasses = useMemo(() => {
        const listGroupHorizontalClass = typeof horizontal === 'string'
            ? `list-group-horizontal-${horizontal}`
            : 'list-group-horizontal';
        return {
            'list-group': true,
            'list-group-numbered': numbered,
            'list-group-flush': flush,
            [listGroupHorizontalClass]: !!horizontal,
        };
    }, [flush, horizontal, numbered]);
    const labelProps = useMemo(() => {
        if (!ariaLabelledBy && !ariaLabel)
            return {};
        return Object.assign(Object.assign({}, ariaLabelledBy
            ? { 'aria-labelledby': ariaLabelledBy }
            : { 'aria-label': ariaLabel }), Tag === 'div' && { role: 'group' });
    }, [ariaLabel, ariaLabelledBy, Tag]);
    return (jsx(ListGroupContext.Provider, { value: Tag, children: jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, labelProps, dataAttributes, { children: children })) }));
}
var DListGroup$1 = Object.assign(DListGroup, {
    Item: DListGroupItem,
});

export { DListGroup$1 as default };
//# sourceMappingURL=DListGroup.js.map
