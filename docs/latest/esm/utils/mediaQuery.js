function subscribeToMediaQuery(query, callback) {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', callback);
    return () => {
        mediaQueryList.removeEventListener('change', callback);
    };
}
function checkMediaQuery(query) {
    return window.matchMedia(query).matches;
}

export { checkMediaQuery, subscribeToMediaQuery };
//# sourceMappingURL=mediaQuery.js.map
