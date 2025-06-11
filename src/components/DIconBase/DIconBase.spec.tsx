/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DIconBase from '.';

describe('<DIconBase />', () => {
  it('should render my component', () => {
    const icon = { icon: 'heart' };

    const { container } = render(
      <DIconBase {...icon} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <i
          class="d-icon bi bi-heart"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
        />
      </div>
    `);
  });

  it('renders with default classes and styles', () => {
    render(
      <DIconBase
        icon="check"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon', 'bi', 'bi-check');
    expect(icon).not.toHaveClass('d-icon-loading');
  });

  it('renders loading state and applies loading duration', () => {
    render(
      <DIconBase
        icon="loader"
        loading
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon-loading');
    expect(icon).toHaveStyle({
      '--bs-icon-component-loading-duration': '1.8s',
    });
  });

  it('applies custom familyClass and familyPrefix', () => {
    render(
      <DIconBase
        icon="rocket"
        familyClass="mdi"
        familyPrefix="mdi-"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('mdi', 'mdi-rocket');
  });

  it('applies custom size, color, backgroundColor and circleSize', () => {
    render(
      <DIconBase
        icon="star"
        size="32px"
        color="red"
        backgroundColor="blue"
        hasCircle
        circleSize="10px"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      '--bs-icon-component-size': '32px',
      '--bs-icon-component-color': 'red',
      '--bs-icon-component-bg-color': 'blue',
      '--bs-icon-component-padding': '10px',
    });
  });

  it('applies theme-based color and backgroundColor if provided', () => {
    render(
      <DIconBase
        icon="star"
        theme="primary"
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

  it('renders icon text when materialStyle is true and skips prefixed class', () => {
    render(
      <DIconBase
        icon="menu"
        materialStyle
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveTextContent('menu');
    expect(icon).not.toHaveClass('bi-menu');
  });

  it('applies default circle background and padding when hasCircle is true and no backgroundColor is provided', () => {
    render(
      <DIconBase
        icon="circle"
        hasCircle
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({
      '--bs-icon-component-bg-color': 'rgba(var(--bs-body-color-rgb), 0.1)',
      '--bs-icon-component-padding': 'calc(var(--bs-icon-size) * 1)',
    });
  });

  it('applies custom className when provided', () => {
    render(
      <DIconBase
        icon="star"
        className="custom-icon-class"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon-class');
  });
});
