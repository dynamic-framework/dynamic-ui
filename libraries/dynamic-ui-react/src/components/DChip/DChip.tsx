import { useMemo } from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';

import type { FamilyIconProps } from '../interface';

type Props = FamilyIconProps & {
  theme?: string;
  text?: string;
  icon?: string;
  showClose?: boolean;
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
    <span className={classNames(generateClasses)}>
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
        >
          <DIcon icon="x-lg" />
        </button>
      )}
    </span>
  );
}
