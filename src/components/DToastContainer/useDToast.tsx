import { useCallback, useMemo } from 'react';

import type { ReactNode } from 'react';

import DToast from '../DToast/DToast';
import DToastDismiss from '../DToast/DToastDismiss';
import DIcon from '../DIcon';
import { toastStore } from '../DToast/toastStore';
import { resolveRole } from '../roles';

import type { ToastPlacement } from '../DToast/store';
import type { ComponentStateColor } from '../interface';

/**
 * What the default toast layout is made of.
 *
 * `description` is the switch between the two shapes: with it, a header and a
 * body; without it, one compact row.
 */
export type ToastData = {
  title: string;
  description?: string;
  /** Shown in the header. Only rendered when `description` is set. */
  timestamp?: string;
  /** A name from the active icon set in `DContextProvider`. */
  icon?: string;
  closeIcon?: string;
  /** Sets `data-color`, which the role matrix selects on. */
  color?: ComponentStateColor;
  /** The dismiss button's accessible name, for a page not in English. */
  closeLabel?: string;
};

export type DToastOptions = {
  /** Stable id. Reusing it updates that toast in place instead of stacking. */
  id?: string;
  /** Milliseconds. `0` keeps it until something dismisses it. */
  duration?: number;
  /** Overrides the container's default for this one toast. */
  placement?: ToastPlacement;
};

/**
 * Dispatches toasts.
 *
 * ```tsx
 * const { toast } = useDToast();
 * toast({ title: 'Saved', color: 'success' });
 * ```
 *
 * Needs `DToastContainer` mounted somewhere as a render target, and
 * `DContextProvider` above it for the icon set.
 *
 * ## What changed from 2.x
 *
 * The signature is the same and `react-hot-toast` is gone from behind it.
 * Three differences a consumer can see:
 *
 * - `dismiss` and `dismissAll` are returned. 2.x asked you to import
 *   `reactHotToast` and call its `dismiss`, so the escape hatch was a third
 *   party's API.
 * - A custom toast is a `ReactNode`, not a `(toast) => ReactNode`. That
 *   function received the library's own toast object — an `id` and a `visible`
 *   flag the caller had to translate into rendering `null`. The container
 *   decides what is mounted, so `visible` was never the content's business;
 *   and a custom toast that wants to close itself uses `<DToastDismiss />`,
 *   which reads the toast from context.
 * - `position` is `placement`, matching `DModal` and the rest of v3.
 *
 * ## Two arguments, not one
 *
 * `toast(data, options)` keeps content and behaviour apart, and it is the 2.x
 * shape. Worth stating because it is easy to get wrong — `duration` and
 * `placement` go in the SECOND object, and putting them in the first is a
 * type error rather than a silent default.
 */
export default function useDToast() {
  /** The default layout. A custom toast skips this entirely. */
  const render = useCallback((data: ToastData): ReactNode => {
    const {
      title, description, timestamp, icon, closeIcon, color, closeLabel,
    } = data;

    return (
      <DToast dataAttributes={color ? { 'data-color': resolveRole(color) } : undefined}>
        {description ? (
          <>
            <DToast.Header>
              {icon && <DIcon className="df-toast-icon" icon={icon} />}
              <p className="df-toast-title">{title}</p>
              {timestamp && <small className="df-toast-timestamp">{timestamp}</small>}
              <DToastDismiss icon={closeIcon} label={closeLabel} />
            </DToast.Header>
            <DToast.Body>
              <span>{description}</span>
            </DToast.Body>
          </>
        ) : (
          <DToast.Body>
            {icon && <DIcon className="df-toast-icon" icon={icon} />}
            <p className="df-toast-title">{title}</p>
            <DToastDismiss icon={closeIcon} label={closeLabel} />
          </DToast.Body>
        )}
      </DToast>
    );
  }, []);

  const toast = useCallback((
    data: ToastData | ReactNode,
    options?: DToastOptions,
  ): string => {
    /*
     * A `ToastData` is a plain object with a `title`. Anything else — an
     * element, a string, a fragment — is content to render as given.
     */
    const isData = !!data
      && typeof data === 'object'
      && !Array.isArray(data)
      && 'title' in (data as ToastData);

    return toastStore.show({
      ...options,
      content: isData ? render(data as ToastData) : (data as ReactNode),
    });
  }, [render]);

  return useMemo(() => ({
    toast,
    /** Starts the exit for one toast. */
    dismiss: toastStore.dismiss,
    dismissAll: toastStore.dismissAll,
  }), [toast]);
}
