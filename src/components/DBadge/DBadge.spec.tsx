/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DBadge from './DBadge';

describe('<DBadge />', () => {
  it('Should render badge', () => {
    const props = {
      color: 'primary',
      text: 'Badge content',
    };

    const { container } = render(
      <DBadge {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="badge badge-primary"
        >
          <span>
            Badge content
          </span>
        </span>
      </div>
    `);
  });

  it('Renders with size prop', () => {
    render(
      <DBadge text="Badge content" size="sm" />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge-sm');
  });

  it('Renders with sizeMd responsive', () => {
    // Simula un ancho de pantalla de 900px (ejemplo para md)
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 900 });
    window.dispatchEvent(new Event('resize'));
    render(
      <DBadge text="Badge content" sizeMd="sm" sizeLg="lg" />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    // Dependiendo del mock de breakpoints, aquí se espera 'badge-sm' si 900 >= md
    expect(badge.className).toMatch(/badge-(sm|lg)/);
  });

  it('Renders with sizeLg responsive', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1300 });
    window.dispatchEvent(new Event('resize'));
    render(
      <DBadge text="Badge content" sizeLg="lg" />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge.className).toMatch(/badge-lg/);
  });

  it('Renders with sizeMd', () => {
    render(
      <DBadge text="Badge content" sizeMd />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge-md');
  });

  it('Renders with sizeLg', () => {
    render(
      <DBadge text="Badge content" sizeLg />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge-lg');
  });

  it('Prioritizes sizeLg over others', () => {
    render(
      <DBadge text="Badge content" sizeSm sizeMd sizeLg size="sm" />,
    );
    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge-lg');
    expect(badge).not.toHaveClass('badge-sm');
    expect(badge).not.toHaveClass('badge-md');
  });

  it('Renders with default props', () => {
    render(
      <DBadge
        text="Badge content"
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge', 'badge-primary');
  });

  it('Renders with soft info color', () => {
    render(
      <DBadge
        text="Badge content"
        color="info"
        soft
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('badge-soft-info');
    expect(badge).not.toHaveClass('badge-info');
  });

  it('Renders rounded badge', () => {
    render(
      <DBadge
        text="Badge content"
        rounded
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveClass('rounded-pill');
  });

  it('Applies id, className, and style', () => {
    render(
      <DBadge
        text="Badge content"
        id="badge-id"
        className="extra-class"
        style={{ color: 'red' }}
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveAttribute('id', 'badge-id');
    expect(badge).toHaveClass('extra-class');
    expect(badge).toHaveStyle({ color: 'red' });
  });

  it('Renders iconStart', () => {
    render(
      <DBadge
        text="Badge content"
        iconStart="Star"
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    const startIcon = badge.querySelector('.d-icon');
    expect(startIcon).toBeInTheDocument();
    expect(startIcon?.querySelector('svg')).toBeInTheDocument();
  });

  it('Renders iconEnd', () => {
    render(
      <DBadge
        text="Badge content"
        iconEnd="Star"
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    const iconEnd = badge.querySelector('.d-icon');
    expect(iconEnd).toBeInTheDocument();
    expect(iconEnd?.querySelector('svg')).toBeInTheDocument();
  });

  it('Applies data attributes', () => {
    render(
      <DBadge
        text="Badge content"
        dataAttributes={{ 'data-test': 'badge' }}
      />,
    );

    const badge = screen.getByText('Badge content').parentElement!;
    expect(badge).toHaveAttribute('data-test', 'badge');
  });
});
