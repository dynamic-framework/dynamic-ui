import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import ForwardedDInputPassword from '../DInputPassword/DInputPassword.js';
import PasswordChecksList from './PasswordCheckList.js';

const DEFAULT_VALIDATION_MESSAGES = {
    number: 'At least one number',
    lowercaseLetter: 'At least one lowercase letter',
    uppercaseLetter: 'At least one uppercase letter',
    especialChar: 'At least one of these special characters: ~!@#$^*-_=[]{}|;,.?',
    notMatch: 'The password confirmation and the new password do not match.',
};
const DEFAULT_ENABLED_CHECKS = ['uppercase', 'lowercase', 'number', 'specialChar'];
function DPasswordStrengthMeter({ id, label = 'Password', placeholder, value = '', name, disabled = false, invalid = false, validationMessages = DEFAULT_VALIDATION_MESSAGES, enabledChecks = DEFAULT_ENABLED_CHECKS, className, style, dataAttributes, onChange, readonly = false, }) {
    const [password, setPassword] = useState(value);
    useEffect(() => {
        setPassword(value);
    }, [value]);
    const handleChange = (newValue) => {
        setPassword(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsx(ForwardedDInputPassword, { id: id, label: label, placeholder: placeholder, value: password, name: name, disabled: disabled, invalid: invalid, onChange: handleChange, readonly: readonly }), jsx(PasswordChecksList, { password: password, validationMessages: validationMessages, enabledChecks: enabledChecks })] })));
}

export { DPasswordStrengthMeter as default };
//# sourceMappingURL=DPasswordStrengthMeter.js.map
