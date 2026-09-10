import currency from 'currency.js';

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

export { formatCurrency as default };
//# sourceMappingURL=formatCurrency.js.map
