import { jsx } from 'react/jsx-runtime';
import { components } from 'react-select';
import DIcon from '../../DIcon/DIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

function DSelectDropdownIndicator(props) {
    const { iconMap: { chevronDown, }, } = useDContext();
    return (jsx(components.DropdownIndicator, Object.assign({}, props, { children: jsx(DIcon, { icon: chevronDown }) })));
}

export { DSelectDropdownIndicator as default };
//# sourceMappingURL=DSelectDropdownIndicator.js.map
