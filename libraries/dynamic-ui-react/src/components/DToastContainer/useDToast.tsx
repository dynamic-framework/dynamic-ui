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

type ToastData = {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: string;
  closeIcon?: string;
  theme?: string;
  soft?: boolean;
};

type Props = Partial<Pick<Toast, 'id' | 'duration' | 'position'>>;

export default function useDToast() {
  const {
    iconMap: {
      xLg,
    },
  } = useDContext();

  const toast = useCallback((
    data: ToastData | ValueFunction<Renderable, Toast>,
    toastProps?: Props,
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
      theme,
      soft,
    } = data;

    return reactHotToast.custom(({ id, visible }) => {
      if (!visible) {
        return null;
      }
      if (!description) {
        return (
          <DToast className={classNames({
            [`toast-${theme}`]: !!theme,
            'toast-soft': soft,
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
                className="d-close"
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
          [`toast-${theme}`]: !!theme,
          'toast-soft': soft,
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
              className="d-close"
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
