import { useMemo } from 'react';
import classNames from 'classnames';

import type { CSSProperties, PropsWithChildren } from 'react';

import DIcon from '../DIcon';
import { ALERT_TYPE_ICON, PREFIX_BS } from '../config';

import type { AlertType, BaseProps, CustomStyles } from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& PropsWithChildren<{
  id?: string;
  type?: AlertType;
  icon?: string;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  showIcon?: boolean;
  showClose?: boolean;
  closeIcon?: string;
  materialStyle?: boolean;
  soft?: boolean;
  onClose?: () => void;
}>;

export default function DAlert(
  {
    type = 'success',
    icon,
    closeIcon = 'x-lg',
    iconFamilyClass: propFamilyClass,
    iconFamilyPrefix: propFamilyPrefix,
    materialStyle: propMaterialStyle = false,
    showIcon = true,
    soft = false,
    showClose,
    onClose,
    children,
    id,
    className,
    style,
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      alert: true,
      [`alert-${type}`]: true,
      'fade show': !!showClose,
      'alert-soft': soft,
      ...className && { [className]: true },
    }),
    [type, showClose, soft, className],
  );

  const {
    icon: {
      familyClass,
      familyPrefix,
      materialStyle,
    },
  } = useDContext();

  const getIcon = useMemo(() => icon || ALERT_TYPE_ICON[type] || '', [icon, type]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3',
  }), [style]);

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
          familyClass={propFamilyClass || familyClass}
          familyPrefix={propFamilyPrefix || familyPrefix}
          materialStyle={propMaterialStyle || materialStyle}
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
            icon={closeIcon}
            familyClass={propFamilyClass || familyClass}
            familyPrefix={propFamilyPrefix || familyPrefix}
            materialStyle={propMaterialStyle || materialStyle}
          />
        </button>
      )}
    </div>
  );
}
