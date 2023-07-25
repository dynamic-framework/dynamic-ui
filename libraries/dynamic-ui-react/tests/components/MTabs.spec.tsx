import { render } from '@testing-library/react';

import MTabs from '../../src/components/MTabs';
import MTabContent from '../../src/components/MTabContent';

describe('MTabs', () => {
  test('renders without crashing', () => {
    render(
      <MTabs
        defaultSelected="tab1"
        options={[
          { label: 'Tab 1', tab: 'tab1' },
          { label: 'Tab 2', tab: 'tab2' },
          { label: 'Tab w/o Content', tab: 'empty' },
        ]}
        onChange={() => {}}
      >
        <MTabContent tab="tab1">
          Tab content for Tab 1
        </MTabContent>
        <MTabContent tab="tab2">
          Tab content for Tab 2
        </MTabContent>
      </MTabs>,
    );
  });
});
