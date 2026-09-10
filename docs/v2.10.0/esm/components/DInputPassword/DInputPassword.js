import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useCallback, useMemo } from 'react';
import ForwardedDInput from '../DInput/DInput.js';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';
import { useDContext } from '../../contexts/DContext.js';

function DInputPassword(_a, ref) {
    var { onIconEndClick, iconEndAriaLabel = 'show/hide password' } = _a, props = __rest(_a, ["onIconEndClick", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const [visible, setVisible] = useState(false);
    const handleOnIconEndClick = useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick();
    }, [onIconEndClick]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = useMemo(() => (!visible ? input.hide : input.show), [input.hide, input.show, visible]);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, iconEnd: iconEnd, type: !visible ? 'password' : 'text', onIconEndClick: handleOnIconEndClick, iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputPassword = forwardRef(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';

export { ForwardedDInputPassword as default };
//# sourceMappingURL=DInputPassword.js.map
