import { jsx } from 'react/jsx-runtime';
import { components } from 'react-select';
import DIcon from '../../DIcon/DIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

function DSelectClearIndicator(props) {
    const { iconMap: { x, }, } = useDContext();
    return (jsx(components.ClearIndicator, Object.assign({}, props, { children: jsx(DIcon, { icon: x }) })));
}

export { DSelectClearIndicator as default };
//# sourceMappingURL=DSelectClearIndicator.js.map
