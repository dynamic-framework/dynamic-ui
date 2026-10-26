import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { PREFIX_BS } from '../config.js';
import DPortalStack from '../../contexts/portal/DPortalStack.js';
import { registerPortalStack } from '../../contexts/portal/portalStackRegistry.js';
import getKeyboardFocusableElements from '../../utils/getKeyboardFocusableElements.js';
import { useResponsiveProp } from '../../hooks/useResponsiveProp.js';
import DOffcanvasHeader from './components/DOffcanvasHeader.js';
import DOffcanvasLabelContext from './components/DOffcanvasLabelContext.js';
import DOffcanvasBody from './components/DOffcanvasBody.js';
import DOffcanvasFooter from './components/DOffcanvasFooter.js';

const variants = {
    hidden: (openFrom) => {
        const properties = {};
        if (openFrom === 'start') {
            properties.x = '-100%';
        }
        if (openFrom === 'end') {
            properties.x = '100%';
        }
        if (openFrom === 'top') {
            properties.y = '-100%';
        }
        if (openFrom === 'bottom') {
            properties.y = '100%';
        }
        return properties;
    },
    visible: {
        x: 0,
        y: 0,
    },
};
const defaultTransition = {
    ease: 'easeInOut',
    duration: 0.3,
};
// Los portales que se renderizan con DContextProvider solo animan su salida
// cuando este módulo forma parte del bundle.
registerPortalStack(DPortalStack);
function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', width, height, transition, children, dataAttributes, ariaLabel, }) {
    const labelId = `${name}Label`;
    // Foco inicial: el contenedor recibe el foco al montar, salvo que ya esté
    // dentro (un hijo con autoFocus).
    const dialogRef = useRef(null);
    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.contains(document.activeElement)) {
            dialog.focus();
        }
    }, []);
    // Con el foco en el contenedor, Shift+Tab iría a lo que hay antes del
    // diálogo: el bucle de Tab de DPortalContext solo actúa desde el primer y el
    // último enfocable. Tab desde el contenedor ya va al primero. Sin
    // enfocables, ninguna de las dos teclas saca el foco del contenedor.
    const handleKeyDown = useCallback((event) => {
        const dialog = dialogRef.current;
        if (event.key !== 'Tab' || !dialog || document.activeElement !== dialog) {
            return;
        }
        const focusableElements = getKeyboardFocusableElements(dialog);
        if (focusableElements.length === 0) {
            event.preventDefault();
            return;
        }
        if (event.shiftKey) {
            event.preventDefault();
            focusableElements[focusableElements.length - 1].focus();
        }
    }, []);
    // Solo se suscribe a los cambios de breakpoint cuando llega un objeto
    // responsive, para no crear suscripciones de matchMedia innecesarias en el
    // caso habitual de valores string.
    const hasResponsiveProp = typeof openFrom === 'object'
        || typeof width === 'object'
        || typeof height === 'object';
    const { responsivePropValue } = useResponsiveProp(hasResponsiveProp);
    const resolvedOpenFrom = useMemo(() => {
        var _a;
        if (typeof openFrom === 'string')
            return openFrom;
        return (_a = responsivePropValue(openFrom)) !== null && _a !== void 0 ? _a : 'end';
    }, [responsivePropValue, openFrom]);
    const resolvedWidth = useMemo(() => {
        if (!width)
            return undefined;
        if (typeof width === 'string')
            return width;
        return responsivePropValue(width);
    }, [responsivePropValue, width]);
    const resolvedHeight = useMemo(() => {
        if (!height)
            return undefined;
        if (typeof height === 'string')
            return height;
        return responsivePropValue(height);
    }, [responsivePropValue, height]);
    return (jsx(motion.div, Object.assign({ ref: dialogRef, className: classNames('offcanvas portal show', {
            [`offcanvas-${resolvedOpenFrom}`]: resolvedOpenFrom,
        }, className), style: Object.assign(Object.assign(Object.assign(Object.assign({}, style), { transition: 'none' }), (resolvedWidth && { [`--${PREFIX_BS}offcanvas-width`]: resolvedWidth })), (resolvedHeight && { [`--${PREFIX_BS}offcanvas-height`]: resolvedHeight })), id: name, tabIndex: -1, onKeyDown: handleKeyDown, role: "dialog", "aria-modal": "true", "aria-label": ariaLabel, "aria-labelledby": ariaLabel ? undefined : labelId, "aria-hidden": "false", custom: resolvedOpenFrom, variants: variants, initial: "hidden", animate: "visible", exit: "hidden", transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition)), { delay: 0.15 }) }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: jsx(DOffcanvasLabelContext.Provider, { value: labelId, children: children }) })));
}
var DOffcanvas$1 = Object.assign(DOffcanvas, {
    Header: DOffcanvasHeader,
    Body: DOffcanvasBody,
    Footer: DOffcanvasFooter,
});

export { DOffcanvas$1 as default };
//# sourceMappingURL=DOffcanvas.js.map
