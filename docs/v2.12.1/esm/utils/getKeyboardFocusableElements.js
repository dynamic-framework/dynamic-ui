const CANDIDATES = 'a, button, input, textarea, select, details, [tabindex]';
/**
 * Indica si un elemento entra en la secuencia de Tab. Solo usa atributos y
 * getComputedStyle: jsdom no tiene layout, así que getClientRects u
 * offsetParent descartarían todo en los tests.
 */
function isKeyboardFocusable(element, container) {
    if (element.hasAttribute('disabled')
        || element.getAttribute('tabindex') === '-1'
        || (element instanceof HTMLInputElement && element.type === 'hidden')
        || element.closest('[hidden], [inert]')) {
        return false;
    }
    // visibility se hereda, así que basta el valor computado del propio
    // elemento; display: none no, y hay que recorrer los ancestros.
    if (getComputedStyle(element).visibility === 'hidden') {
        return false;
    }
    let node = element;
    while (node && node !== container) {
        if (getComputedStyle(node).display === 'none') {
            return false;
        }
        node = node.parentElement;
    }
    return true;
}
function getKeyboardFocusableElements(container) {
    if (!container) {
        return [];
    }
    return [...container.querySelectorAll(CANDIDATES)]
        .filter((element) => isKeyboardFocusable(element, container));
}

export { getKeyboardFocusableElements as default };
//# sourceMappingURL=getKeyboardFocusableElements.js.map
