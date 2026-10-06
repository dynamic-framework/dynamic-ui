import { jsxs, jsx } from 'react/jsx-runtime';
import DIcon from '../DIcon/DIcon.js';

function PasswordCheckItem({ password, regex, text, }) {
    const isValid = regex.test(password);
    return (jsxs("li", { className: `d-password-check-item${isValid ? ' is-valid' : ''}`, children: [jsx(DIcon, { className: "d-password-check-item-icon", icon: isValid ? 'CircleCheck' : 'Circle', size: "16px" }), jsx("span", { children: text })] }));
}

export { PasswordCheckItem as default };
//# sourceMappingURL=PasswordCheckItem.js.map
