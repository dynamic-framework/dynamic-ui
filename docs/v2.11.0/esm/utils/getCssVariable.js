function getCssVariable(variable) {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(variable).trim();
}

export { getCssVariable as default };
//# sourceMappingURL=getCssVariable.js.map
