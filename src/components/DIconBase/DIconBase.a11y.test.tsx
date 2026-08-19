/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DIconBase from './DIconBase';

describe('<DIconBase /> a11y', () => {
  it('should have no violations with a default Lucide icon', async () => {
    const { container } = render(
      <DIconBase icon="Home" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a color and circle background', async () => {
    const { container } = render(
      <DIconBase icon="Home" color="primary" hasCircle />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with material style icon', async () => {
    const { container } = render(
      <DIconBase icon="home" materialStyle familyClass="material-symbols-outlined" familyPrefix="" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with an unresolved icon and a custom family class', async () => {
    const { container } = render(
      <DIconBase icon="custom-icon" familyClass="custom-family" familyPrefix="ci-" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
