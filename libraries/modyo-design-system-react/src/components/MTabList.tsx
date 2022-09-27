import { ReactNode } from 'react';
import {
  TabList,
  TabListProps,
} from 'react-tabs';

export interface MTabListProps extends TabListProps {
  variant?: 'pills' | 'group';
  children?: ReactNode | undefined;
}

function MTabList({
  className,
  children,
  variant,
  ...attrs
}: MTabListProps) {
  return (
    <TabList
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attrs}
      className={[
        'react-tabs__tab-list',
        className ? className as string : '',
        variant ? `react-tabs__tab-list-variant-${variant}` : '',
      ]}
    >
      {children}
    </TabList>

  );
}

MTabList.tabsRole = 'TabList';

export default MTabList;
