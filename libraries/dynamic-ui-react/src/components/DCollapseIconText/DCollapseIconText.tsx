import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DCollapse from '../DCollapse';
import DIcon from '../DIcon';

import type { BaseProps, FamilyIconProps } from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<{
  /**
   * Icon name
   */
  icon: string;
  /**
   * Icon theme
   */
  iconTheme?: string;
  /**
   * Icon size
   */
  iconSize?: string;
  /**
   * Title
   */
  title: string;
}>;

export default function DCollapseIconText(
  {
    children,
    icon,
    iconSize = '1.5rem',
    iconTheme = 'primary',
    title,
    iconFamilyClass,
    iconFamilyPrefix,
    className,
    style,
  }: Props,
) {
  return (
    <DCollapse
      defaultCollapsed
      className={classNames('d-collapse-icon-text', className)}
      style={style}
      Component={(
        <div className="d-collapse-icon-text-header">
          <DIcon
            icon={icon}
            size={iconSize}
            theme={iconTheme}
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            hasCircle
          />
          <span className="d-collapse-icon-text-title">
            {title}
          </span>
        </div>
      )}
    >
      {children}
    </DCollapse>
  );
}
