import { render } from '@testing-library/react';
import { DateTime } from 'luxon';

import DDatePicker from '../../src/components/DDatePicker';

describe('DDatePicker', () => {
  test('renders without crashing', () => {
    render(
      <DDatePicker
        date={DateTime.now().toISO()}
        onChangeDate={() => {}}
      />,
    );
  });
});
