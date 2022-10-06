import { render } from '@testing-library/react';

import MSkeleton from '../src/components/MSkeleton';

describe('Base skeleton', () => {
  test('renders without crashing', () => {
    render(
      <MSkeleton>
        <rect className="hello" x="22" y="13" rx="0" ry="0" width="249" height="51" />
      </MSkeleton>,
    );
  });
});
