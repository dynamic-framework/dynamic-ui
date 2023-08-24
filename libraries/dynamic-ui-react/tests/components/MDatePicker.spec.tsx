import { render } from '@testing-library/react';
import { DateTime } from 'luxon';

import MDatePicker from '../../src/components/MDatePicker';

describe('MDatePicker', () => {
  test('renders without crashing', () => {
    render(
      <MDatePicker
        date={DateTime.now().toISO()}
        setDate={() => {}}
      />,
    );
  });
});
