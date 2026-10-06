import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback, useMemo, isValidElement, cloneElement } from 'react';
import classNames from 'classnames';
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useRole, useInteractions, useId, FloatingFocusManager } from '@floating-ui/react';
import { PREFIX_BS } from '../config.js';

function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender = false, className, style, dataAttributes, }) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const onOpenChange = useCallback((value) => {
        setIsOpen(value);
        setOpen === null || setOpen === void 0 ? void 0 : setOpen(value);
    }, [setOpen]);
    const { refs, floatingStyles, context, } = useFloating({
        open: isOpen,
        onOpenChange,
        middleware: [
            offset(0),
            flip({ fallbackAxisSideDirection: 'none' }),
            shift(),
        ],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ]);
    const headingId = useId();
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), (adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    }))), [style, adjustContentToRender]);
    const triggerElement = renderComponent(isOpen);
    if (!isValidElement(triggerElement)) {
        throw new Error('renderComponent must return a valid React element');
    }
    const reference = cloneElement(triggerElement, Object.assign({ ref: refs.setReference }, getReferenceProps(triggerElement.props)));
    return (jsxs("div", Object.assign({ className: classNames('d-popover', className), style: generateStyleVariables }, dataAttributes, { children: [reference, isOpen && (jsx(FloatingFocusManager, { context: context, modal: false, children: jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'd-popover-content-fill': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] })));
}

export { DPopover as default };
//# sourceMappingURL=DPopover.js.map
