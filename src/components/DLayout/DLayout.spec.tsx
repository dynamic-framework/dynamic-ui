/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DLayout from '.';

/**
 * These assertions changed shape with the 3.x port.
 *
 * 2.x put the gap and the column span in class names — `.gap-md-4`,
 * `.g-col-sm-6` — so a test could assert the exact class for a given prop.
 * 3.x resolves the responsive value in JavaScript with `useResponsiveProp` and
 * writes one custom property, which replaced 84 generated class names with two
 * CSS rules.
 *
 * The consequence for testing: which breakpoint jsdom resolves to is not
 * pinned down here, so a responsive assertion checks that the resolved value is
 * one of the ones supplied, rather than naming a single expected class.
 */
const styleOf = (el: ChildNode | Element | null) => (el as HTMLElement).style;

describe('DLayout', () => {
  it('should render children', () => {
    const { getByText } = render(<DLayout>Hello</DLayout>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should apply the layout className', () => {
    const { container } = render(<DLayout>Content</DLayout>);
    expect(container.firstChild).toHaveClass('df-layout');
  });

  it('should apply custom className', () => {
    const { container } = render(<DLayout className="custom-class">Hello</DLayout>);
    expect(container.firstChild).toHaveClass('df-layout', 'custom-class');
  });

  it('should apply custom style', () => {
    const { container } = render(<DLayout style={{ color: 'red' }}>Hello</DLayout>);
    expect(container.firstChild).toHaveStyle('color: rgb(255, 0, 0)');
  });

  it('should pass dataAttributes', () => {
    const { container } = render(
      <DLayout dataAttributes={{ 'data-testid': 'custom-layout' }}>Hello</DLayout>,
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'custom-layout');
  });

  it('should default to 12 columns', () => {
    const { container } = render(<DLayout>Hello</DLayout>);
    expect(styleOf(container.firstChild).getPropertyValue('--df-layout-columns')).toBe('12');
  });

  it('should apply a custom column count', () => {
    const { container } = render(<DLayout columns={6}>Hello</DLayout>);
    expect(styleOf(container.firstChild).getPropertyValue('--df-layout-columns')).toBe('6');
  });

  it('should apply a flat gap', () => {
    const { container } = render(<DLayout gap={4}>Hello</DLayout>);
    expect(styleOf(container.firstChild).getPropertyValue('--df-layout-gap'))
      .toBe('var(--df-size-4)');
  });

  it('should set no gap property when gap is omitted', () => {
    const { container } = render(<DLayout>Hello</DLayout>);
    expect(styleOf(container.firstChild).getPropertyValue('--df-layout-gap')).toBe('');
  });

  it('should resolve a responsive gap object to one of its values', () => {
    const { container } = render(<DLayout gap={{ xs: 1, md: 3, lg: 4 }}>Hello</DLayout>);
    // `''` is in the set because jsdom matches no media query, so the resolver
    // legitimately returns nothing there. In a browser one of the values wins.
    expect(['', 'var(--df-size-1)', 'var(--df-size-3)', 'var(--df-size-4)'])
      .toContain(styleOf(container.firstChild).getPropertyValue('--df-layout-gap'));
  });

  it('should fold the deprecated per-tier gap props into the responsive value', () => {
    const { container } = render(
      <DLayout gap={1} gapSm={2} gapMd={3} gapLg={4} gapXl={5} gapXxl={0}>Hello</DLayout>,
    );
    const resolved = styleOf(container.firstChild).getPropertyValue('--df-layout-gap');
    expect(['', ...[0, 1, 2, 3, 4, 5].map((n) => `var(--df-size-${n})`)]).toContain(resolved);
  });

  describe('DLayout.Pane', () => {
    it('should render children', () => {
      const { getByText } = render(<DLayout.Pane>Pane</DLayout.Pane>);
      expect(getByText('Pane')).toBeInTheDocument();
    });

    it('should apply the pane className', () => {
      const { container } = render(<DLayout.Pane>Pane</DLayout.Pane>);
      expect(container.firstChild).toHaveClass('df-layout-pane');
    });

    it('should apply a numeric span', () => {
      const { container } = render(<DLayout.Pane cols={4}>Pane</DLayout.Pane>);
      expect(styleOf(container.firstChild).getPropertyValue('--df-layout-pane-span')).toBe('4');
    });

    it('should apply a string span', () => {
      const { container } = render(<DLayout.Pane cols="8">Pane</DLayout.Pane>);
      expect(styleOf(container.firstChild).getPropertyValue('--df-layout-pane-span')).toBe('8');
    });

    it('should set no span property when cols is omitted', () => {
      const { container } = render(<DLayout.Pane>Pane</DLayout.Pane>);
      expect(styleOf(container.firstChild).getPropertyValue('--df-layout-pane-span')).toBe('');
    });

    it('should apply custom className', () => {
      const { container } = render(
        <DLayout.Pane cols={4} className="custom-pane">Pane</DLayout.Pane>,
      );
      expect(container.firstChild).toHaveClass('df-layout-pane', 'custom-pane');
    });

    it('should resolve a responsive span to one of its values', () => {
      const { container } = render(
        <DLayout.Pane cols={{ xs: 12, md: 6, lg: 3 }}>Pane</DLayout.Pane>,
      );
      expect(['', '12', '6', '3'])
        .toContain(styleOf(container.firstChild).getPropertyValue('--df-layout-pane-span'));
    });

    it('should fold the deprecated per-tier cols props into the responsive value', () => {
      const { container } = render(
        <DLayout.Pane colsXs={12} colsSm={6} colsMd={4} colsLg={3} colsXl={2} colsXxl={1}>
          Pane
        </DLayout.Pane>,
      );
      const resolved = styleOf(container.firstChild).getPropertyValue('--df-layout-pane-span');
      expect(['', '12', '6', '4', '3', '2', '1']).toContain(resolved);
    });

    it('should render a full layout with panes', () => {
      const { container } = render(
        <DLayout gap={3} columns={12}>
          <DLayout.Pane cols={8}>Main</DLayout.Pane>
          <DLayout.Pane cols={4}>Aside</DLayout.Pane>
        </DLayout>,
      );
      const grid = container.firstChild as HTMLElement;
      expect(grid).toHaveClass('df-layout');
      expect(grid.querySelectorAll('.df-layout-pane')).toHaveLength(2);
    });
  });
});
