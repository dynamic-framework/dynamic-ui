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
      return (
        <DToast className={classNames({
          [`bg-${theme}-soft`]: !!theme && soft,
          [`text-bg-${theme}`]: !!theme && !soft,
          'border-0': !!theme,
        }, 'show')}
        >
          {!description && (
            <DToast.Body className="d-flex justify-content-between align-items-center">
              <span className="me-auto">
                {title}
              </span>
              <button
                type="button"
                className={classNames({
                  [`text-bg-${theme}`]: !!theme && !soft,
                  'd-close': true,
                })}
                aria-label="Close"
                onClick={() => reactHotToast.dismiss(id)}
              >
                <DIcon icon={closeIcon || xLg} />
              </button>
            </DToast.Body>
          )}
          {description && (
            <>
              <DToast.Header className={classNames({
                [`bg-${theme}-soft`]: !!theme && soft,
                [`text-bg-${theme}`]: !!theme && !soft,
              }, 'show')}
              >
                {icon && (
                  <DIcon icon={icon} />
                )}
                <p className="mb-0 me-auto">{title}</p>
                {timestamp && (
                  <small>{timestamp}</small>
                )}
                <button
                  type="button"
                  className={classNames({
                    [`text-bg-${theme}`]: !!theme && !soft,
                    'd-close': true,
                  })}
                  aria-label="Close"
                  onClick={() => reactHotToast.dismiss(id)}
                >
                  <DIcon icon={closeIcon || xLg} />
                </button>
              </DToast.Header>
              <DToast.Body className="d-flex justify-content-between align-items-center">
                <span>
                  {description}
                </span>
              </DToast.Body>
            </>
          )}
        </DToast>
      );
    }, toastProps);
  }, [xLg]);

  return {
    toast,
  };
}
