import { jsx } from 'react/jsx-runtime';
import useFormatCurrency from '../../hooks/useFormatCurrency.js';

function DCurrencyText({ value, className, style, dataAttributes, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsx("span", Object.assign({ className: className, style: style }, dataAttributes, { children: valueFormatted })));
}

export { DCurrencyText as default };
//# sourceMappingURL=DCurrencyText.js.map
