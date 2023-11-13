import { useMemo } from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';

import type { BaseProps, FamilyIconProps } from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& {
  theme?: string;
  text?: string;
  icon?: string;
  showClose?: boolean;
  closeAriaText?: string;
  onClose?: () => void;
};

export default function DChip(
  {
    theme = 'primary',
    text,
    icon,
    iconFamilyClass,
    iconFamilyPrefix,
    showClose = false,
    closeAriaText = 'close',
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
          />
        </div>
      )}
      <span>{text}</span>
      {showClose && (
        <button
          type="button"
          className="d-chip-icon-container"
          onClick={onClose}
          aria-label={closeAriaText}
        >
          <DIcon icon="x-lg" />
        </button>
      )}
    </span>
  );
}
