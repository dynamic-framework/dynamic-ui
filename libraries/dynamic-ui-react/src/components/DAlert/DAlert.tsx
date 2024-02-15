import { useMemo } from 'react';
import classNames from 'classnames';

import type { CSSProperties, PropsWithChildren } from 'react';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

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
  iconMaterialStyle?: boolean;
  showIcon?: boolean;
  showClose?: boolean;
  iconClose?: string;
  iconCloseFamilyClass?: string;
  iconCloseFamilyPrefix?: string;
  iconCloseMaterialStyle?: boolean;
  soft?: boolean;
  onClose?: () => void;
}>;

export default function DAlert(
  {
    type = 'success',
    icon: iconProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle = false,
    iconClose: iconCloseProp,
    iconCloseFamilyClass,
    iconCloseFamilyPrefix,
    iconCloseMaterialStyle = false,
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
  const {
    iconMap: {
      alert,
      xLg,
    },
  } = useDContext();
  const icon = useMemo(() => iconProp || alert[type], [alert, iconProp, type]);
  const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);

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
          icon={icon}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
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
            icon={iconClose}
            familyClass={iconCloseFamilyClass}
            familyPrefix={iconCloseFamilyPrefix}
            materialStyle={iconCloseMaterialStyle}
          />
        </button>
      )}
    </div>
  );
}
