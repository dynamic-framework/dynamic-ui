import { useCallback } from 'react';
import formatCurrency from '../utils/formatCurrency.js';
import { useDContext } from '../contexts/DContext.js';

function useFormatCurrency(...args) {
    const { currency } = useDContext();
    const format = useCallback((value, currencyOptions) => formatCurrency(value, currencyOptions || currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

export { useFormatCurrency as default };
//# sourceMappingURL=useFormatCurrency.js.map
