import { Renderable, Toast, ToastPosition, ValueFunction } from 'react-hot-toast';
import { ComponentStateColor } from '../interface';
/**
 * Data used to render the default DToast component via `useDToast`.
 * When `description` is provided, the toast renders with a header and body layout.
 * When omitted, a compact single-row body layout is used instead.
 */
export type ToastData = {
    /** Main text displayed in the toast. */
    title: string;
    /** Optional secondary text. When present, activates the header + body layout. */
    description?: string;
    /** Timestamp string shown in the header (e.g. "just now").
     * Only visible when `description` is set. */
    timestamp?: string;
    /** Icon name from the active icon set in `DContextProvider`. Shown before the title. */
    icon?: string;
    /** Overrides the default close icon from the context icon map. */
    closeIcon?: string;
    /** Applies the `toast-{color}` CSS modifier class. */
    color?: ComponentStateColor;
};
/** Options forwarded to react-hot-toast for a single toast instance. */
export interface DToastOptions {
    /** Stable id; reusing it updates the existing toast in place. */
    id?: string;
    /** Auto-dismiss delay in milliseconds. */
    duration?: number;
    /** Overrides the container default position for this individual toast. */
    position?: ToastPosition;
}
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
export default function useDToast(): {
    toast: (data: ToastData | ValueFunction<Renderable, Toast>, toastProps?: DToastOptions) => string;
};
