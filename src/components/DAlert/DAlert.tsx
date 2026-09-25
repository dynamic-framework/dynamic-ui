import classNames from 'classnames';
import { useMemo } from 'react';

import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

import { useDContext } from '../../contexts';
import type { BaseProps, ComponentStateColor, LiveRegionRole } from '../interface';

type Props =
& BaseProps
& PropsWithChildren<{
  id?: string;
  color?: ComponentStateColor;
  /**
   * `alert` (default) interrupts the screen reader, for critical errors.
   * `status` announces without interrupting, for dynamic non-critical
   * messages. `none` renders no role, for static content already on screen.
   */
  role?: LiveRegionRole;
  icon?: string;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  iconMaterialStyle?: boolean;
  showClose?: boolean;
  /** Accessible name of the close button. */
  closeAriaLabel?: string;
  iconClose?: string;
  iconCloseFamilyClass?: string;
  iconCloseFamilyPrefix?: string;
  iconCloseMaterialStyle?: boolean;
  onClose?: () => void;
}>;

export default function DAlert(
  {
    color = 'success',
    role = 'alert',
    icon: iconProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    iconClose: iconCloseProp,
    iconCloseFamilyClass,
    iconCloseFamilyPrefix,
    iconCloseMaterialStyle,
    showClose,
    closeAriaLabel = 'Close',
    onClose,
    children,
    id,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const {
    icon: {
      materialStyle,
      familyClass,
      familyPrefix,
    },
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
      {...role !== 'none' && { role }}
      id={id}
      {...dataAttributes}
    >
      {icon && (
        <DIcon
          className="alert-icon"
          icon={icon}
          familyClass={iconFamilyClass ?? familyClass}
          familyPrefix={iconFamilyPrefix ?? familyPrefix}
          materialStyle={iconMaterialStyle ?? materialStyle}
        />
      )}
      <div className="alert-text">
        {children}
      </div>
      {showClose && (
        <button
          type="button"
          className="d-close"
          aria-label={closeAriaLabel}
          onClick={onClose}
        >
          <DIcon
            icon={iconClose}
            familyClass={iconCloseFamilyClass ?? familyClass}
            familyPrefix={iconCloseFamilyPrefix ?? familyPrefix}
            materialStyle={iconCloseMaterialStyle ?? materialStyle}
          />
        </button>
      )}
    </div>
  );
}
