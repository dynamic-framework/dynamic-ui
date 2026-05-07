import {
  useCallback,
} from 'react';
import {
  toast as reactHotToast,
  Renderable,
  Toast,
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
type ToastOptions = Partial<Pick<Toast, 'id' | 'duration' | 'position'>>;

export default function useDToast() {
  const {
    iconMap: {
      xLg,
    },
  } = useDContext();

  const toast = useCallback((
    data: ToastData | ValueFunction<Renderable, Toast>,
    toastProps?: ToastOptions,
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
