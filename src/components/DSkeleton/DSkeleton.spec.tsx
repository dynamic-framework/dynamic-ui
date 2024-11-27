import { render } from '@testing-library/react';

import DSkeleton from './DSkeleton';

describe('DSkeleton', () => {
  test('renders without crashing', () => {
    render(
      <DSkeleton>
        <rect className="hello" x="22" y="13" rx="0" ry="0" width="249" height="51" />
      </DSkeleton>,
    );
  });
});
