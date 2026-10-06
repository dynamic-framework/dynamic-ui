import { jsx } from 'react/jsx-runtime';
import { components } from 'react-select';
import DIcon from '../../DIcon/DIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

function DSelectMultiValueRemove(props) {
    const { iconMap: { x, }, } = useDContext();
    return (jsx(components.MultiValueRemove, Object.assign({}, props, { children: jsx(DIcon, { icon: x }) })));
}

export { DSelectMultiValueRemove as default };
//# sourceMappingURL=DSelectMultiValueRemove.js.map
