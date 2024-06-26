import {
  ReactElement,
  useCallback,
} from 'react';
import { toast as reactHotToast, Toast } from 'react-hot-toast';
import classNames from 'classnames';
import DToast from '../DToast/DToast';
import DIcon from '../DIcon';
import DButtonIcon from '../DButtonIcon';

type ToastData = {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: string;
  theme?: string;
  soft?: boolean;
};

type Props = Partial<Pick<Toast, 'id' | 'duration' | 'position'>>;

export default function useDToast() {
  const toast = useCallback((
    data: ToastData | (() => ReactElement),
    toastProps: Props,
  ) => {
    if (typeof data === 'function') {
      return reactHotToast.custom(data, {});
    }
    const {
      title,
      description,
      icon,
      timestamp,
      theme,
      soft,
    } = data;
    return reactHotToast.custom((t) => (
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
            <DButtonIcon
              icon="x"
              variant="link"
              size="sm"
              {...!soft && { theme: 'light' }}
              onClick={() => reactHotToast.dismiss(t.id)}
            />
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
              <DButtonIcon
                icon="x"
                size="sm"
                {...(!soft && !theme) && { theme: 'light' }}
                {...(!soft && theme) && { theme }}
                onClick={() => reactHotToast.dismiss(t.id)}
              />
            </DToast.Header>
            <DToast.Body className="d-flex justify-content-between align-items-center">
              <span>
                {description}
              </span>
            </DToast.Body>
          </>
        )}
      </DToast>
    ), toastProps);
  }, []);

  return {
    toast,
  };
}
