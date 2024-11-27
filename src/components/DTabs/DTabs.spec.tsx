import { render } from '@testing-library/react';

import DTabs from './DTabs';
import DTabContent from './components/DTabContent';

describe('DTabs', () => {
  test('renders without crashing', () => {
    render(
      <DTabs
        defaultSelected="tab1"
        options={[
          { label: 'Tab 1', tab: 'tab1' },
          { label: 'Tab 2', tab: 'tab2' },
          { label: 'Tab w/o Content', tab: 'empty' },
        ]}
        onChange={() => {}}
      >
        <DTabContent tab="tab1">
          Tab content for Tab 1
        </DTabContent>
        <DTabContent tab="tab2">
          Tab content for Tab 2
        </DTabContent>
      </DTabs>,
    );
  });
});
