import { render } from '@testing-library/react';

import MToastContainer from '../../src/components/MToastContainer';

describe('MToastContainer', () => {
  test('renders without crashing', () => {
    render(
      <MToastContainer />,
    );
  });
});
