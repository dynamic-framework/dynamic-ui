import { ReactNode } from 'react';
import {
  TabPanel,
  TabPanelProps,
} from 'react-tabs';

export interface MTabPanelProps extends TabPanelProps {
  children?: ReactNode | undefined;
}

function MTabPanel({ className, children, ...attrs }: MTabPanelProps) {
  return (
    <TabPanel
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attrs}
      className={[
        'react-tabs__tab-panel',
        className ? className as string : '',
      ]}
    >
      {children}
    </TabPanel>
  );
}

MTabPanel.tabsRole = 'TabPanel';

export default MTabPanel;
