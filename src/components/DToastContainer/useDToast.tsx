import {
  useCallback,
} from 'react';
import {
  toast as reactHotToast,
  Renderable,
  Toast,
  ToastPosition,
  ValueFunction,
} from 'react-hot-toast';
import classNames from 'classnames';
import DToast from '../DToast/DToast';
import DIcon from '../DIcon';
import { useDContext } from '../../contexts';

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
export default function useDToast() {
  const {
    iconMap: {
      xLg,
    },
  } = useDContext();

  /**
   * Dispatches a toast notification rendered as a `DToast` component.
   * When `data` is a `ToastData` object, the default DToast layout is used.
   * When `data` is a render function, full custom content is rendered instead.
   * Returns the toast ID, which can be passed to `reactHotToast.dismiss(id)`.
   * @param data - Toast content as `ToastData` or a render function for custom layouts.
   * @param toastProps - Optional per-toast overrides: id, duration, position.
   */
  const toast = useCallback((
    data: ToastData | ValueFunction<Renderable, Toast>,
    toastProps?: DToastOptions,
  ) => {
    if (typeof data === 'function') {
      return reactHotToast.custom(data, toastProps);
    }

    const {
      title,
      description,
      icon,
      closeIcon,
      timestamp,
      color,
    } = data;

    return reactHotToast.custom(({ id, visible }) => {
      if (!visible) {
        return null;
      }
      if (!description) {
        return (
          <DToast className={classNames({
            [`toast-${color}`]: !!color,
          }, 'show')}
          >
            <DToast.Body>
              {icon && (
                <DIcon className="toast-icon" icon={icon} />
              )}
              <p className="toast-title">
                {title}
              </p>
              <button
                type="button"
                className="d-close align-self-center"
                aria-label="Close"
                onClick={() => reactHotToast.dismiss(id)}
              >
                <DIcon icon={closeIcon || xLg} />
              </button>
            </DToast.Body>
          </DToast>
        );
      }
      return (
        <DToast className={classNames({
          [`toast-${color}`]: !!color,
        }, 'show')}
        >
          <DToast.Header>
            {icon && (
              <DIcon className="toast-icon" icon={icon} />
            )}
            <p className="toast-title">
              {title}
            </p>
            {timestamp && (
              <small className="toast-timestamp">{timestamp}</small>
            )}
            <button
              type="button"
              className="d-close align-self-center"
              aria-label="Close"
              onClick={() => reactHotToast.dismiss(id)}
            >
              <DIcon icon={closeIcon || xLg} />
            </button>
          </DToast.Header>
          <DToast.Body>
            <span>
              {description}
            </span>
          </DToast.Body>
        </DToast>
      );
    }, toastProps);
  }, [xLg]);

  return {
    toast,
  };
}
