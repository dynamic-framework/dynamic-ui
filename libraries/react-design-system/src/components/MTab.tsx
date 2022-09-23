import { MouseEventHandler, ReactNode } from 'react';
import {
  Tab,
  TabProps,
} from 'react-tabs';

import { MIcon } from './proxies';

export interface MTabProps extends TabProps {
  icon?: string;
  children?: ReactNode | undefined;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

function MTab({
  className,
  children,
  icon,
  onClick,
  ...attrs
}: MTabProps) {
  return (
    <Tab
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attrs}
      className={[
        'react-tabs__tab',
        className ? className as string : '',
        icon ? 'react-tabs__tab-icon' : '',
      ]}
      onClick={onClick}
    >
      {icon && (
        <MIcon icon={icon} />
      )}
      {children}
    </Tab>
  );
}

MTab.tabsRole = 'Tab';

export default MTab;
