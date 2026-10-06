function getQueryString(value, config = {}) {
    const { useSearch = true, default: defaultValue } = config;
    const urlParams = new URLSearchParams(useSearch ? window.location.search : '');
    return urlParams.get(value) || defaultValue;
}

export { getQueryString as default };
//# sourceMappingURL=getQueryString.js.map
