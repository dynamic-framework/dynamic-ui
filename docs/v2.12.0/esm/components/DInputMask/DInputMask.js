import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { InputMask } from '@react-input/mask';
import ForwardedDInput from '../DInput/DInput.js';

function DInputMask(props, ref) {
    return (jsx(InputMask, Object.assign({ ref: ref, component: ForwardedDInput }, props)));
}
const ForwardedDInputMask = forwardRef(DInputMask);
ForwardedDInputMask.displayName = 'DInputMask';

export { ForwardedDInputMask as default };
//# sourceMappingURL=DInputMask.js.map
