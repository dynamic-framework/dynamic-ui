import { render } from '@testing-library/react';

import DDatePicker from '../../src/components/DDatePicker';

describe('DDatePicker', () => {
  test('renders without crashing', () => {
    render(
      <DDatePicker
        date={new Date().toISOString()}
        onChange={() => {}}
      />,
    );
  });
});
