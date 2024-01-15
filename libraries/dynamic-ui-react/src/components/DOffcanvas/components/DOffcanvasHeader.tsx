import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps, FamilyIconProps } from '../../interface';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<{
  showCloseButton?: boolean;
  icon?: string;
  materialStyle?: boolean;
  onClose?: () => void;
}>;

export default function DOffcanvasHeader(
  {
    showCloseButton,
    onClose,
    children,
    className,
    style,
    iconFamilyClass,
    iconFamilyPrefix,
    icon = 'x-lg',
    materialStyle = false,
  }: Props,
) {
  return (
    <div
      className={classNames('offcanvas-header', className)}
      style={style}
    >
      <div className="d-offcanvas-slot">
        {children}
      </div>
      {showCloseButton && (
        <button
          type="button"
          className="d-offcanvas-close"
          aria-label="Close"
          onClick={onClose}
        >
          <DIcon
            icon={icon}
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            materialStyle={materialStyle}
          />
        </button>
      )}
    </div>
  );
}
