function getKeyboardFocusableElements(container) {
    if (!container) {
        return [];
    }
    return [
        ...container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'),
    ].filter((element) => !element.hasAttribute('disabled'));
}

export { getKeyboardFocusableElements as default };
//# sourceMappingURL=getKeyboardFocusableElements.js.map
