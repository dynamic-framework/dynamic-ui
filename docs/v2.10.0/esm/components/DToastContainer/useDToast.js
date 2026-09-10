import { jsx, jsxs } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import classNames from 'classnames';
import DToast from '../DToast/DToast.js';
import DIcon from '../DIcon/DIcon.js';
import { useDContext } from '../../contexts/DContext.js';

/**
 * Hook that provides a `toast` function to dispatch DToast notifications.
 *
 * Prerequisites:
 * - The calling component must be inside `DContextProvider` (provides icon context).
 * - `DToastContainer` must be present somewhere in the component tree as a render target.
 *
 * @returns {{ toast }} Object containing a `toast` dispatcher function.
 * @requires DContextProvider
 * @requires DToastContainer
 * @example
 * const { toast } = useDToast();
 * toast({ title: 'Saved', color: 'success' });
 */
function useDToast() {
    const { iconMap: { xLg, }, } = useDContext();
    /**
     * Dispatches a toast notification rendered as a `DToast` component.
     * When `data` is a `ToastData` object, the default DToast layout is used.
     * When `data` is a render function, full custom content is rendered instead.
     * Returns the toast ID, which can be passed to `reactHotToast.dismiss(id)`.
     * @param data - Toast content as `ToastData` or a render function for custom layouts.
     * @param toastProps - Optional per-toast overrides: id, duration, position.
     */
    const toast$1 = useCallback((data, toastProps) => {
        if (typeof data === 'function') {
            return toast.custom(data, toastProps);
        }
        const { title, description, icon, closeIcon, timestamp, color, } = data;
        return toast.custom(({ id, visible }) => {
            if (!visible) {
                return null;
            }
            if (!description) {
                return (jsx(DToast, { className: classNames({
                        [`toast-${color}`]: !!color,
                    }, 'show'), children: jsxs(DToast.Body, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }) }));
            }
            return (jsxs(DToast, { className: classNames({
                    [`toast-${color}`]: !!color,
                }, 'show'), children: [jsxs(DToast.Header, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), timestamp && (jsx("small", { className: "toast-timestamp", children: timestamp })), jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }), jsx(DToast.Body, { children: jsx("span", { children: description }) })] }));
        }, toastProps);
    }, [xLg]);
    return {
        toast: toast$1,
    };
}

export { useDToast as default };
//# sourceMappingURL=useDToast.js.map
