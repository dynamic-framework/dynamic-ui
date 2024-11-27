import { render } from '@testing-library/react';

import DToastContainer from './DToastContainer';

describe('DToastContainer', () => {
  test('renders without crashing', () => {
    render(
      <DToastContainer />,
    );
  });
});
