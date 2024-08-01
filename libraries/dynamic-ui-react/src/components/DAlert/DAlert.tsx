import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

import type { AlertTheme, BaseProps } from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& PropsWithChildren<{
  id?: string;
  theme?: AlertTheme;
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
    theme = 'success',
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
  }: Props,
) {
  const {
    iconMap: {
      alert,
      xLg,
    },
  } = useDContext();
  const icon = useMemo(() => iconProp || alert[theme], [alert, iconProp, theme]);
  const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);

  const generateClasses = useMemo(
    () => ({
      alert: true,
      [`alert-${theme}`]: true,
      'fade show': !!showClose,
      ...className && { [className]: true },
    }),
    [theme, showClose, className],
  );

  return (
    <div
      className={classNames(generateClasses)}
      style={style}
      role="alert"
      id={id}
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
