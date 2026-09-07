/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DIcon from './DIcon';
import { DContextProvider } from '../../contexts';

describe('<DIcon /> a11y', () => {
  it('should have no violations with a default Lucide icon', async () => {
    const { container } = render(
      <DIcon icon="Heart" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with material style icon', async () => {
    const { container } = render(
      <DIcon icon="settings" materialStyle />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a custom SVG component icon', async () => {
    function CustomIcon() {
      return <svg aria-hidden="true" viewBox="0 0 24 24" />;
    }

    const { container } = render(
      // eslint-disable-next-line react/jsx-no-bind
      <DIcon icon={CustomIcon} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when resolving an icon from context registry', async () => {
    function CustomIcon() {
      return <svg aria-hidden="true" viewBox="0 0 24 24" />;
    }
    const iconRegistry = { NMChevron: CustomIcon };

    const { container } = render(
      <DContextProvider iconRegistry={iconRegistry}>
        <DIcon icon="NMChevron" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
