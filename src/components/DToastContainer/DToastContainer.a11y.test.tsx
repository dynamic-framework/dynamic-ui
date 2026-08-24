import { render } from '@testing-library/react';

import axe from '../../../tests/a11y/axeHelper';
import DToastContainer from './DToastContainer';

describe('<DToastContainer /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { baseElement } = render(<DToastContainer />);

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with reversed order and custom position', async () => {
    const { baseElement } = render(
      <DToastContainer position="top-right" reverseOrder />,
    );

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a custom containerClassName and gutter', async () => {
    const { baseElement } = render(
      <DToastContainer containerClassName="custom-toast-container" gutter={16} />,
    );

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
