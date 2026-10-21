import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import DIconBase from '../DIconBase/DIconBase.js';
import { useDContext } from '../../contexts/DContext.js';

/**
 * Thin wrapper over `DIconBase` that fills the icon-font configuration
 * (`familyClass`, `familyPrefix`, `materialStyle`) from `DContextProvider`
 * whenever the caller does not pass it explicitly.
 *
 * Name resolution itself — registry, then lucide-react, then the icon-font
 * family — lives in `DIconBase`, so both components behave identically.
 */
function DIcon(_a) {
    var { icon, familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle } = _a, props = __rest(_a, ["icon", "familyClass", "familyPrefix", "materialStyle"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsx(DIconBase, Object.assign({ icon: icon, familyClass: propFamilyClass !== null && propFamilyClass !== void 0 ? propFamilyClass : familyClass, familyPrefix: propFamilyPrefix !== null && propFamilyPrefix !== void 0 ? propFamilyPrefix : familyPrefix, materialStyle: propMaterialStyle !== null && propMaterialStyle !== void 0 ? propMaterialStyle : materialStyle }, props)));
}

export { DIcon as default };
//# sourceMappingURL=DIcon.js.map
