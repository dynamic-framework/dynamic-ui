import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useMemo } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, arrow, useHover, useFocus, useDismiss, useClick, useRole, useInteractions, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import classNames from 'classnames';

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
/**
 * Tooltip is an abstraction component that wraps any element (`Component`) and displays
 * floating contextual content (`children`) positioned relative to it using Floating UI.
 * Use it to add short, non-critical hints or descriptions triggered by hover, focus, or
 * click, without altering the surrounding layout.
 */
function DTooltip({ className, childrenClassName, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, open = false, placement = 'top', size, Component, children, }) {
    const [isOpen, setIsOpen] = useState(open);
    const arrowRef = useRef(null);
    const { refs, context, floatingStyles, } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(offSet),
            flip(),
            shift({
                padding,
            }),
            arrow({
                element: arrowRef,
            }),
        ],
    });
    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context, { ancestorScroll: true });
    const click = useClick(context);
    const role = useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    const generateClasses = useMemo(() => (Object.assign({ 'tooltip show': true, [`tooltip-${size}`]: !!size }, className && { [className]: true })), [size, className]);
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: childrenClassName, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsx(FloatingPortal, { children: isOpen && (jsxs("div", Object.assign({ className: classNames(generateClasses), ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), style) }, getFloatingProps(), { children: [jsx(FloatingArrow, { ref: arrowRef, context: context, width: ARROW_WIDTH, height: ARROW_HEIGHT }), jsx("div", { className: "tooltip-inner", children: children })] }))) })] }));
}

export { DTooltip as default };
//# sourceMappingURL=DTooltip.js.map
