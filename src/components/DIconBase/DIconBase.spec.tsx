/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DIconBase from '.';
import { DContextProvider } from '../../contexts';

describe('<DIconBase />', () => {
  it('should render Lucide icon', () => {
    const { container } = render(
      <DIconBase icon="Heart" />,
    );

    const iconElement = container.querySelector('.d-icon');
    expect(iconElement).toBeInTheDocument();

    // Lucide renders an SVG
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with default classes', () => {
    render(
      <DIconBase
        icon="Check"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon');
  });

  it('applies custom size and color', () => {
    render(
      <DIconBase
        icon="Star"
        size="32px"
        color="primary"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      '--bs-icon-component-size': '32px',
    });
    expect(icon).toHaveClass('d-icon-color-primary');
  });

  it('applies custom size and color with hasCircle', () => {
    render(
      <DIconBase
        icon="Star"
        size="32px"
        color="primary"
        hasCircle
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      '--bs-icon-component-size': '32px',
      '--bs-icon-component-padding': 'calc(var(--bs-icon-component-size, 24px) * 0.4)',
    });
    expect(icon).toHaveClass('d-icon-color-primary');
    expect(icon).toHaveClass('d-icon-has-circle');
  });

  it('applies color-based background when hasCircle is true', () => {
    render(
      <DIconBase
        icon="Star"
        color="primary"
        hasCircle
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon-color-primary');
    expect(icon).toHaveClass('d-icon-has-circle');
  });

  it('renders Material Design icon when materialStyle is true', () => {
    render(
      <DIconBase
        icon="menu"
        materialStyle
        familyClass="material-symbols-outlined"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveTextContent('menu');
    expect(icon).toHaveClass('material-symbols-outlined');
  });

  it('applies default circle background and padding when hasCircle is true', () => {
    render(
      <DIconBase
        icon="Circle"
        hasCircle
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      '--bs-icon-component-padding': 'calc(var(--bs-icon-component-size, 24px) * 0.4)',
    });
    expect(icon).toHaveClass('d-icon-has-circle');
  });

  it('applies custom className when provided', () => {
    render(
      <DIconBase
        icon="Star"
        className="custom-icon-class"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon-class');
  });

  it('applies strokeWidth to Lucide icons', () => {
    const { container } = render(
      <DIconBase
        icon="Heart"
        strokeWidth={3}
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders Lucide icon with proper size', () => {
    const { container } = render(
      <DIconBase
        icon="Settings"
        size="48px"
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('shows warning for non-existent icon', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    const { container } = render(
      <DIconBase icon="NonExistentIcon" />,
    );

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Icon "NonExistentIcon" not found in Lucide'),
    );

    // Should render fallback
    const iconElement = container.querySelector('.d-icon');
    expect(iconElement).toHaveTextContent('?');

    consoleWarnSpy.mockRestore();
  });

  it('renders with custom familyClass for Material Design', () => {
    render(
      <DIconBase
        icon="star"
        materialStyle
        familyClass="custom-icon-family"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon-family');
  });
  describe('icon registry', () => {
    function CustomIcon() {
      return <svg data-testid="custom-svg" />;
    }

    it('resolves a string icon from iconRegistry in context', () => {
      render(
        <DContextProvider iconRegistry={{ NMChevron: CustomIcon }}>
          <DIconBase icon="NMChevron" />
        </DContextProvider>,
      );

      expect(screen.getByTestId('custom-svg')).toBeInTheDocument();
    });

    it('prioritizes iconRegistry over Lucide when the name exists in both', () => {
      render(
        <DContextProvider iconRegistry={{ Home: CustomIcon }}>
          <DIconBase icon="Home" />
        </DContextProvider>,
      );

      expect(screen.getByTestId('custom-svg')).toBeInTheDocument();
    });

    it('prioritizes iconRegistry over materialStyle', () => {
      render(
        <DContextProvider iconRegistry={{ NMChevron: CustomIcon }}>
          <DIconBase icon="NMChevron" materialStyle familyClass="material-symbols-outlined" />
        </DContextProvider>,
      );

      expect(screen.getByTestId('custom-svg')).toBeInTheDocument();
    });

    it('falls back to normal resolution when the name is not registered', () => {
      const { container } = render(
        <DContextProvider iconRegistry={{ NMChevron: CustomIcon }}>
          <DIconBase icon="Home" />
        </DContextProvider>,
      );

      expect(screen.queryByTestId('custom-svg')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('development warning for unresolved names', () => {
    it('warns once per name when the family is still the package default', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

      const { container } = render(
        <DContextProvider>
          <DIconBase icon="UnknownWarnOnce" familyClass="bi" familyPrefix="bi-" />
          <DIconBase icon="UnknownWarnOnce" familyClass="bi" familyPrefix="bi-" />
        </DContextProvider>,
      );

      // The icon-font fallback still renders, unchanged.
      expect(container.querySelector('.d-icon')).toHaveClass('bi', 'bi-UnknownWarnOnce');

      const nameWarnings = consoleWarnSpy.mock.calls
        .filter(([message]) => String(message).includes('"UnknownWarnOnce"'));
      expect(nameWarnings).toHaveLength(1);
      expect(String(nameWarnings[0][0])).toContain('iconRegistry');

      consoleWarnSpy.mockRestore();
    });

    it('does not warn when the consumer configured an icon font explicitly', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

      render(
        <DContextProvider>
          <DIconBase icon="rocket_launch" familyClass="material-symbols-outlined" familyPrefix="ms-" />
        </DContextProvider>,
      );

      expect(consoleWarnSpy).not.toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });

    it('does not warn for a name that resolves through the registry', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

      function CustomIcon() {
        return <svg data-testid="registered-svg" />;
      }

      render(
        <DContextProvider iconRegistry={{ Whatever: CustomIcon }}>
          <DIconBase icon="Whatever" familyClass="bi" familyPrefix="bi-" />
        </DContextProvider>,
      );

      expect(screen.getByTestId('registered-svg')).toBeInTheDocument();
      expect(consoleWarnSpy).not.toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });
});
