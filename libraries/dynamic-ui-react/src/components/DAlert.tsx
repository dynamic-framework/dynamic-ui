import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';
import DIcon from './DIcon';
import { ALERT_TYPE_ICON, AlertType } from '../interfaces/DAlertInterface';
import { PREFIX_BS } from '../interfaces/component-config';
import { CustomStyles } from '../interfaces/component-interface';

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  style?: CSSProperties;
  type?: AlertType;
  icon?: string;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  showIcon?: boolean;
  showClose?: boolean;
  onClose?: () => void;
}>;

export default function DAlert({
  type = 'light',
  icon,
  iconFamilyClass,
  iconFamilyPrefix,
  showIcon = false,
  showClose,
  onClose,
  children,
  id,
  className,
  style,
}: Props) {
  const generateClasses = useMemo(
    () => ({
      alert: true,
      [`alert-${type}`]: true,
      'fade show': !!showClose,
      className: !!className,
    }),
    [type, showClose, className],
  );

  const getIcon = useMemo(() => icon || ALERT_TYPE_ICON[type] || '', [icon, type]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3',
    ...type === 'light' && {
      [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)`,
    },
  }), [style, type]);

  return (
    <div
      className={classNames(generateClasses)}
      style={generateStyleVariables}
      role="alert"
      id={id}
    >
      {(showIcon || icon) && (
        <DIcon
          className="alert-icon"
          icon={getIcon}
          {...iconFamilyClass && { familyClass: iconFamilyClass }}
          {...iconFamilyPrefix && { familyPrefix: iconFamilyPrefix }}
        />
      )}
      <div className="alert-text">
        {children}
      </div>
      {showClose && (
        <div className="alert-separator" />
      )}
      {showClose && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        >
          <DIcon
            className="alert-close-icon"
            icon="x-lg"
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
          />
        </button>
      )}
    </div>
  );
}
