import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { PREFIX_BS } from '../config.js';
import { useResponsiveProp } from '../../hooks/useResponsiveProp.js';
import DOffcanvasHeader from './components/DOffcanvasHeader.js';
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
function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', width, height, transition, children, dataAttributes, }) {
    // Only subscribe to breakpoint-change listeners when a responsive object is
    // actually provided, avoiding unnecessary matchMedia subscriptions for the
    // common case of plain string values.
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
    return (jsx(motion.div, Object.assign({ className: classNames('offcanvas portal show', {
            [`offcanvas-${resolvedOpenFrom}`]: resolvedOpenFrom,
        }, className), style: Object.assign(Object.assign(Object.assign(Object.assign({}, style), { transition: 'none' }), (resolvedWidth && { [`--${PREFIX_BS}offcanvas-width`]: resolvedWidth })), (resolvedHeight && { [`--${PREFIX_BS}offcanvas-height`]: resolvedHeight })), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", custom: resolvedOpenFrom, variants: variants, initial: "hidden", animate: "visible", exit: "hidden", transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition)), { delay: 0.15 }) }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: children })));
}
var DOffcanvas$1 = Object.assign(DOffcanvas, {
    Header: DOffcanvasHeader,
    Body: DOffcanvasBody,
    Footer: DOffcanvasFooter,
});

export { DOffcanvas$1 as default };
//# sourceMappingURL=DOffcanvas.js.map
