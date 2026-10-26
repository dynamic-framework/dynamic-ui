import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import ForwardedDInput from '../../DInput/DInput.js';
import { useDContext } from '../../../contexts/DContext.js';

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd, className, style, inputLabel, readOnly: ignored } = _a, props = __rest(_a, ["value", "onClick", "id", "iconEnd", "className", "style", "inputLabel", "readOnly"]);
    const { iconMap: { calendar } } = useDContext();
    return (jsx(ForwardedDInput, Object.assign({ ref: ref, onClick: onClick, readOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd || calendar, className: className, style: style, label: inputLabel }, props)));
}
const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';

export { ForwardedDDatePickerInput as default };
//# sourceMappingURL=DDatePickerInput.js.map
