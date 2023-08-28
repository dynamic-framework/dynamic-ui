import { PropsWithChildren } from 'react';

import DCollapse from './DCollapse';
import { DIcon } from './proxies';

type Props = PropsWithChildren<{
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
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
}>;

export default function DCollapseIconText({
  children,
  icon,
  iconSize = '1.5rem',
  iconTheme = 'primary',
  title,
  iconFamilyClass,
  iconFamilyPrefix,
}: Props) {
  return (
    <DCollapse
      defaultCollapsed
      className="d-collapse-icon-text"
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