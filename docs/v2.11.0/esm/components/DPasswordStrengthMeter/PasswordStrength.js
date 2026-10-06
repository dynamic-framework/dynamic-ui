import { jsx } from 'react/jsx-runtime';

const getStrengthModifier = (strength, total) => {
    const percentage = total > 0 ? strength / total : 0;
    if (percentage === 0)
        return 'is-empty';
    if (percentage <= 0.25)
        return 'is-weak';
    if (percentage <= 0.5)
        return 'is-fair';
    if (percentage <= 0.75)
        return 'is-good';
    return 'is-strong';
};
function PasswordStrengthBar({ strength, total }) {
    const percentage = total > 0 ? (strength / total) * 100 : 0;
    return (jsx("div", { className: "d-password-strength-bar", children: jsx("div", { className: `d-password-strength-bar-fill ${getStrengthModifier(strength, total)}`, style: {
                width: `${percentage}%`,
            } }) }));
}

export { PasswordStrengthBar as default };
//# sourceMappingURL=PasswordStrength.js.map
