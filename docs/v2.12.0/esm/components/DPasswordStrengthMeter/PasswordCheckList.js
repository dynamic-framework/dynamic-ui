import { jsxs, jsx } from 'react/jsx-runtime';
import PasswordCheckItem from './PasswordCheckItem.js';
import PasswordStrengthBar from './PasswordStrength.js';

const CHECK_REGEX = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /\d/,
    specialChar: /[~!@#$^*\-_=[\]{}|;,.?]/,
};
function PasswordChecksList({ password, validationMessages, enabledChecks, }) {
    const allChecks = [
        {
            key: 'uppercase',
            regex: CHECK_REGEX.uppercase,
            text: validationMessages.uppercaseLetter,
        },
        {
            key: 'lowercase',
            regex: CHECK_REGEX.lowercase,
            text: validationMessages.lowercaseLetter,
        },
        {
            key: 'number',
            regex: CHECK_REGEX.number,
            text: validationMessages.number,
        },
        {
            key: 'specialChar',
            regex: CHECK_REGEX.specialChar,
            text: validationMessages.especialChar,
        },
    ];
    const passwordChecks = allChecks.filter((check) => enabledChecks.includes(check.key));
    const passed = passwordChecks.filter((r) => r.regex.test(password)).length;
    const total = passwordChecks.length;
    return (jsxs("div", { className: "d-password-strength-meter", children: [jsx(PasswordStrengthBar, { strength: passed, total: total }), jsx("ul", { className: "d-password-check-list", children: passwordChecks.map(({ key, regex, text }) => (jsx(PasswordCheckItem, { password: password, regex: regex, text: text }, key))) })] }));
}

export { CHECK_REGEX, PasswordChecksList as default };
//# sourceMappingURL=PasswordCheckList.js.map
