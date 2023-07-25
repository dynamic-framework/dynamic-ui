import { PropsWithChildren } from 'react';

import MCollapse from '../MCollapse';
import { MIcon } from '../proxies';

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

export default function MCollapseIconText({
  children,
  icon,
  iconSize = '1.5rem',
  iconTheme = 'primary',
  title,
  iconFamilyClass,
  iconFamilyPrefix,
}: Props) {
  return (
    <MCollapse
      defaultCollapsed
      className="m-collapse-icon-text"
      Component={(
        <div className="m-collapse-icon-text-header">
          <MIcon
            icon={icon}
            size={iconSize}
            theme={iconTheme}
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            hasCircle
          />
          <span className="m-collapse-icon-text-title">
            {title}
          </span>
        </div>
      )}
    >
      {children}
    </MCollapse>
  );
}
