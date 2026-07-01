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

  it('should apply inline placement styles for start and end', () => {
    const { rerender } = render(
      <DDropdown actions={baseActions} placement="start" />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    const startMenu = screen.getByRole('menu');
    expect(startMenu).toHaveStyle('left: auto');
    expect(startMenu).toHaveStyle('right: 100%');
    expect(startMenu).toHaveStyle('top: 0px');
    expect(startMenu).toHaveStyle('transform: translateX(-4px)');

    rerender(
      <DDropdown actions={baseActions} placement="end" />,
    );

    fireEvent.click(screen.getByLabelText('Toggle Dropdown'));
    const endMenu = screen.getByRole('menu');
    expect(endMenu).toHaveStyle('left: 100%');
    expect(endMenu).toHaveStyle('right: auto');
    expect(endMenu).toHaveStyle('top: 0px');
    expect(endMenu).toHaveStyle('transform: translateX(4px)');
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
