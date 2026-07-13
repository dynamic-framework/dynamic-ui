/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DIcon from './DIcon';
import { DContextProvider } from '../../contexts';

describe('<DIcon />', () => {
  function CustomIcon() {
    return <svg data-testid="custom-svg" viewBox="0 0 24 24" />;
  }

  it('should render my component', () => {
    const props = { icon: 'Heart' };

    const { container } = render(
      <DIcon {...props} />,
    );

    const icon = container.querySelector('.d-icon');
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe('SPAN');
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('should use values from context when props are not provided', () => {
    render(
      <DIcon
        icon="Home"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon');
    expect(icon.querySelector('svg')).toBeInTheDocument();
  });

  it('should override context values with props', () => {
    const { container } = render(
      <DIcon
        icon="Settings"
        familyClass="custom-family-class"
        familyPrefix="cfc-"
        materialStyle={false}
      />,
    );
    const icon = container.querySelector('.d-icon');
    expect(icon).toHaveClass('d-icon');
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('should override context values with props and use material style', () => {
    const { container } = render(
      <DIcon
        icon="settings"
        familyClass="custom-family-class"
        familyPrefix=""
        materialStyle
      />,
    );
    const icon = container.querySelector('.d-icon');
    expect(icon).toHaveClass('custom-family-class');
    expect(icon).toHaveTextContent('settings');
    expect(icon?.tagName).toBe('I');
  });

  it('should render SVG component icon directly', () => {
    render(
      // eslint-disable-next-line react/jsx-no-bind
      <DIcon icon={CustomIcon} />,
    );

    expect(screen.getByTestId('custom-svg')).toBeInTheDocument();
  });

  it('should resolve string icon from iconRegistry in context', () => {
    const iconRegistry = { NMChevron: CustomIcon };

    render(
      <DContextProvider iconRegistry={iconRegistry}>
        <DIcon icon="NMChevron" />
      </DContextProvider>,
    );

    expect(screen.getByTestId('custom-svg')).toBeInTheDocument();
  });
});
