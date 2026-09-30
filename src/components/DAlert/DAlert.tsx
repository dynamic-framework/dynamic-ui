import classNames from 'classnames';
import { useMemo } from 'react';

import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

import { useDContext } from '../../contexts';
import type { BaseProps, ComponentStateColor } from '../interface';
import { resolveRole } from '../roles';

type Props =
& BaseProps
& PropsWithChildren<{
  id?: string;
  color?: ComponentStateColor;
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

  const dataProps = useMemo(
    () => ({ 'data-color': resolveRole(color, 'info') }),
    [color],
  );

  return (
    <div
      className={classNames('df-alert', className)}
      style={style}
      role="alert"
      id={id}
      {...dataProps}
      {...dataAttributes}
    >
      {icon && (
        <DIcon
          className="df-alert-icon"
          icon={icon}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
      <div className="df-alert-content">
        {children}
      </div>
      {showClose && (
        <button
          type="button"
          className="df-button df-alert-dismiss"
          data-variant="link"
          data-color="neutral"
          data-size="sm"
          data-icon-only=""
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
