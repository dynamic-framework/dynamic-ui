import { render } from '@testing-library/react';
import { DateTime } from 'luxon';

import MCalendar from '../../src/components/MCalendar';

describe('MCalendar', () => {
  test('renders without crashing', () => {
    render(
      <MCalendar
        date={DateTime.now().toISO()}
        setDate={() => {}}
      />,
    );
  });
});
