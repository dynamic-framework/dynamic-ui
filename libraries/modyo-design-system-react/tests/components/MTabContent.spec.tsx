import { render } from '@testing-library/react';

import MTabContent from '../../src/components/MTabContent';

describe('MTabContent', () => {
  test('renders without crashing', () => {
    render(
      <MTabContent tab="tab1">
        Tab content for Tab 1
      </MTabContent>,
    );
  });
});
