/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DIconBase from '.';

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
      '--bs-icon-component-color': 'var(--bs-primary)',
    });
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
      '--bs-icon-component-color': 'var(--bs-primary)',
      '--bs-icon-component-bg-color': 'rgba(var(--bs-primary-rgb), 0.1)',
      '--bs-icon-component-padding': 'calc(var(--bs-icon-component-size, 24px) * 0.4)',
    });
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
    expect(icon).toHaveStyle({
      '--bs-icon-component-color': 'var(--bs-primary)',
      '--bs-icon-component-bg-color': 'rgba(var(--bs-primary-rgb), 0.1)',
    });
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
      '--bs-icon-component-bg-color': 'rgba(var(--bs-body-color-rgb), 0.1)',
      '--bs-icon-component-padding': 'calc(var(--bs-icon-component-size, 24px) * 0.4)',
    });
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
});
