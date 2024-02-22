import { useMemo } from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';

import type { BaseProps, FamilyIconProps } from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& FamilyIconProps
& {
  theme?: string;
  text?: string;
  icon?: string;
  iconClose?: string;
  iconCloseFamilyClass?: string;
  iconCloseFamilyPrefix?: string;
  iconCloseMaterialStyle?: boolean;
  showClose?: boolean;
  closeAriaLabel?: string;
  onClose?: () => void;
};

export default function DChip(
  {
    theme = 'primary',
    text,
    icon,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    iconClose: iconCloseProp,
    iconCloseFamilyClass,
    iconCloseFamilyPrefix,
    iconCloseMaterialStyle,
    showClose = false,
    closeAriaLabel = 'close',
    className,
    style,
    onClose,
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      'd-chip': true,
      [`d-chip-${theme}`]: !!theme,
    }),
    [theme],
  );
  const {
    iconMap: {
      xLg,
    },
  } = useDContext();
  const iconClose = useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
  return (
    <span
      className={classNames(generateClasses, className)}
      style={style}
    >
      {icon && (
        <div className="d-chip-icon-container">
          <DIcon
            icon={icon}
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            materialStyle={iconMaterialStyle}
          />
        </div>
      )}
      <span>{text}</span>
      {showClose && (
        <button
          type="button"
          className="d-chip-icon-container"
          onClick={onClose}
          aria-label={closeAriaLabel}
        >
          <DIcon
            icon={iconClose}
            familyClass={iconCloseFamilyClass}
            familyPrefix={iconCloseFamilyPrefix}
            materialStyle={iconCloseMaterialStyle}
          />
        </button>
      )}
    </span>
  );
}
