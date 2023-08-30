import { render } from '@testing-library/react';

import DToastContainer from '../../src/components/DToastContainer';

describe('DToastContainer', () => {
  test('renders without crashing', () => {
    render(
      <DToastContainer />,
    );
  });
});
