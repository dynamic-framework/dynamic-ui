/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ComponentProps } from 'react';
import DDropdown from '.';

describe('<DDropdown />', () => {
  const baseActions: ComponentProps<typeof DDropdown>['actions'] = [
    { label: 'Action 1', onClick: () => {} },
    { label: 'Action 2', onClick: () => {} },
    { label: 'Action 3', isDivider: true },
  ];

  it('should render a DDropdown', () => {
    const props: ComponentProps<typeof DDropdown> = {
      className: 'custom-dropdown',
      actions: baseActions,
    };

    const { container } = render(
      <DDropdown {...props} />,
    );

    const dropdown = container.querySelector('.dropdown');
    const toggle = container.querySelector('button');

    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveClass('custom-dropdown');
    expect(toggle).toBeInTheDocument();
  });

  it('should render menu into document.body when asPortal is enabled', () => {
    const { container } = render(
      <DDropdown actions={baseActions} asPortal />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    expect(document.body.contains(menu)).toBe(true);
    expect(container.querySelector('[role="menu"]')).not.toBe(menu);
  });

  it('should close portal menu on outside click', () => {
    render(
      <DDropdown actions={baseActions} asPortal />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should apply fixed pixel coords for start and end placements', () => {
    const toggleRect = {
      width: 40,
      height: 24,
      top: 100,
      right: 200,
      bottom: 124,
      left: 160,
      x: 160,
      y: 100,
      toJSON: () => ({}),
    };
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(toggleRect as DOMRect);

    const { container: startContainer } = render(
      <DDropdown actions={baseActions} placement="start" />,
    );
    fireEvent.click(screen.getAllByLabelText('Toggle Dropdown')[0]);
    const startMenu = screen.getAllByRole('menu')[0];
    expect(startMenu).toHaveStyle('position: fixed');
    expect(startMenu).toHaveStyle('top: 100px');
    expect(startContainer.querySelector('.dropdown')).toHaveClass('drop-start');

    const { container: endContainer } = render(
      <DDropdown actions={baseActions} placement="end" />,
    );
    fireEvent.click(screen.getAllByLabelText('Toggle Dropdown')[1]);
    const endMenu = screen.getAllByRole('menu')[1];
    expect(endMenu).toHaveStyle('position: fixed');
    expect(endMenu).toHaveStyle('top: 100px');
    expect(endMenu).toHaveStyle('left: 204px');
    expect(endContainer.querySelector('.dropdown')).toHaveClass('drop-end');

    jest.restoreAllMocks();
  });

  it('should flip to "up" when there is not enough space below the toggle', () => {
    Object.defineProperty(window, 'innerHeight', { value: 400, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 1000, configurable: true });
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 40,
      height: 24,
      top: 380,
      right: 240,
      bottom: 404,
      left: 200,
      x: 200,
      y: 380,
      toJSON: () => ({}),
    } as DOMRect);

    const { container } = render(
      <DDropdown actions={baseActions} placement="down" />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    const menu = screen.getByRole('menu');
    expect(container.querySelector('.dropdown')).toHaveClass('drop-up');
    // Should sit above the toggle (top < toggle top), not below it.
    expect(Number((menu).style.top.replace('px', ''))).toBeLessThan(380);

    jest.restoreAllMocks();
  });

  it('should shift horizontally instead of overflowing the right edge of the viewport', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true });
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function mockRect(
      this: HTMLElement,
    ) {
      if (this.getAttribute('role') === 'menu') {
        return {
          width: 200,
          height: 96,
          top: 0,
          right: 200,
          bottom: 96,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect;
      }
      return {
        width: 40,
        height: 24,
        top: 100,
        right: 480,
        bottom: 124,
        left: 440,
        x: 440,
        y: 100,
        toJSON: () => ({}),
      } as DOMRect;
    });

    const { container } = render(
      <DDropdown actions={baseActions} placement="down" />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    const menu = screen.getByRole('menu');
    expect(container.querySelector('.dropdown')).toHaveClass('drop-down');
    const left = Number((menu).style.left.replace('px', ''));
    // Menu must stay fully inside the viewport (no horizontal overflow/scroll).
    expect(left).toBeGreaterThanOrEqual(0);
    expect(left + 200).toBeLessThanOrEqual(500);

    jest.restoreAllMocks();
  });

  it('should fall back to vertical placement when a centered toggle has no horizontal room', () => {
    // 320px-wide viewport with the toggle centered: neither `start` nor `end`
    // has enough space for the menu, so it must flip to the vertical axis.
    Object.defineProperty(window, 'innerWidth', { value: 320, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 568, configurable: true });
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function mockRect(
      this: HTMLElement,
    ) {
      if (this.getAttribute('role') === 'menu') {
        return {
          width: 160,
          height: 150,
          top: 0,
          right: 160,
          bottom: 150,
          left: 0,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect;
      }
      return {
        width: 40,
        height: 24,
        top: 200,
        right: 160,
        bottom: 224,
        left: 120,
        x: 120,
        y: 200,
        toJSON: () => ({}),
      } as DOMRect;
    });

    const { container } = render(
      <DDropdown actions={baseActions} placement="end" />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    const menu = screen.getByRole('menu');
    // Should have switched to the vertical axis instead of overflowing sideways.
    expect(container.querySelector('.dropdown')).toHaveClass('drop-down');
    const left = Number((menu).style.left.replace('px', ''));
    const top = Number((menu).style.top.replace('px', ''));
    expect(left).toBeGreaterThanOrEqual(0);
    expect(left + 160).toBeLessThanOrEqual(320);
    expect(top).toBeGreaterThanOrEqual(224);

    jest.restoreAllMocks();
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 768, configurable: true });
  });

  it('should compute portal coordinates for end placement', () => {
    const { container } = render(
      <DDropdown actions={baseActions} asPortal placement="end" />,
    );

    const dropdown = container.querySelector('.dropdown') as HTMLDivElement;
    dropdown.getBoundingClientRect = () => ({
      width: 40,
      height: 24,
      top: 100,
      right: 200,
      bottom: 124,
      left: 160,
      x: 160,
      y: 100,
      toJSON: () => ({}),
    });

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));

    const menu = screen.getByRole('menu');
    expect(menu).toHaveStyle('position: fixed');
    expect(menu).toHaveStyle('top: 100px');
    expect(menu).toHaveStyle('left: 204px');
    expect(menu).toHaveStyle('min-width: 160px');
  });
});
