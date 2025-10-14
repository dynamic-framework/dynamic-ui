import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

import type { ComponentColor, BaseProps } from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& PropsWithChildren<{
  id?: string;
  color?: ComponentColor;
  icon?: string;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  iconMaterialStyle?: boolean;
  showClose?: boolean;
  iconClose?: string;
  iconCloseFamilyClass?: string;
  iconCloseFamilyPrefix?: string;
  iconCloseMaterialStyle?: boolean;
  onClose?: () => void;
}>;

export default function DAlert(
  {
    color = 'success',
    icon: iconProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle = false,
    iconClose: iconCloseProp,
    iconCloseFamilyClass,
    iconCloseFamilyPrefix,
    iconCloseMaterialStyle = false,
    showClose,
    onClose,
    children,
    id,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const {
    iconMap: {
      alert,
      xLg,
    },
  } = useDContext();
  const icon = useMemo(() => iconProp || alert[color], [alert, iconProp, color]);
  const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);

  const generateClasses = useMemo(
    () => ({
      alert: true,
      [`alert-${color}`]: true,
      'fade show': !!showClose,
      ...className && { [className]: true },
    }),
    [color, showClose, className],
  );

  return (
    <div
      className={classNames(generateClasses)}
      style={style}
      role="alert"
      id={id}
      {...dataAttributes}
    >
      {icon && (
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
        <button
          type="button"
          className="d-close"
          aria-label="Close"
          onClick={onClose}
        >
          <DIcon
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
