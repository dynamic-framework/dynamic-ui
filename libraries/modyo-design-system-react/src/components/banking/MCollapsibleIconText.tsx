import { PropsWithChildren } from 'react';
import MCollapse from '../MCollapse';
import { MIcon } from '../proxies';

type Props = PropsWithChildren<{
  icon: string;
  iconTheme?: string;
  iconSize?: string;
  title: string;
}>;

export default function MCollapsibleIconText({
  children,
  icon,
  iconSize = '1.5rem',
  iconTheme = 'primary',
  title,
}: Props) {
  return (
    <MCollapse
      defaultCollapsed
      Component={(
        <div className="d-flex align-items-center gap-3 my-2 collapse-content">
          <div className={`bg-${iconTheme} bg-opacity-10 container-icon`}>
            <MIcon
              icon={icon}
              size={iconSize}
              theme={iconTheme}
            />
          </div>
          <span className="collapse-title">
            {title}
          </span>
        </div>
      )}
    >
      {children}
    </MCollapse>
  );
}
