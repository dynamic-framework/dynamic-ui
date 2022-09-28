import { ReactNode } from 'react';
import {
  Tabs,
  TabsProps,
} from 'react-tabs';

import '../../src/styles/MTabs.scss';

export interface MTabsProps extends TabsProps {
  children?: ReactNode | undefined;
}

function MTabs({
  className,
  children,
  onSelect,
  ...attrs
}: MTabsProps) {
  return (
    <Tabs
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attrs}
      onSelect={onSelect}
      className={[
        'react-tabs test-tabs',
        className ? className as string : '',
      ]}
    >
      {children}
    </Tabs>
  );
}

MTabs.tabsRole = 'Tabs';

export default MTabs;
