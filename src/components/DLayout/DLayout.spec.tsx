/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DLayout from '.';

describe('DLayout', () => {
  it('should render children', () => {
    const { getByText } = render(<DLayout>Hello</DLayout>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should apply grid className', () => {
    const { container } = render(<DLayout>Content</DLayout>);
    expect(container.firstChild).toHaveClass('grid');
  });

  it('should apply custom className', () => {
    const { container } = render(<DLayout className="custom-class">Hello</DLayout>);
    expect(container.firstChild).toHaveClass('grid', 'custom-class');
  });

  it('should apply custom style', () => {
    const { container } = render(<DLayout style={{ color: 'red' }}>Hello</DLayout>);
    expect(container.firstChild).toHaveStyle('color: red');
  });

  it('should pass dataAttributes', () => {
    const { container } = render(<DLayout dataAttributes={{ 'data-testid': 'custom-layout' }}>Hello</DLayout>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'custom-layout');
  });

  it('should apply gap class with string value', () => {
    const { container } = render(<DLayout gap="3">Hello</DLayout>);
    expect(container.firstChild).toHaveClass('grid', 'gap-3');
  });

  it('should apply gap class with number value', () => {
    const { container } = render(<DLayout gap={4}>Hello</DLayout>);
    expect(container.firstChild).toHaveClass('grid', 'gap-4');
  });

  it('should not apply gap class when gap prop is not provided', () => {
    const { container } = render(<DLayout>Hello</DLayout>);
    expect(container.firstChild).toHaveClass('grid');
    expect(container.firstChild).not.toHaveClass('gap-undefined');
  });

  it('should apply responsive gap classes', () => {
    const { container } = render(
      <DLayout gap={1} gapSm={2} gapMd={3} gapLg={4}>
        Hello
      </DLayout>,
    );
    expect(container.firstChild).toHaveClass('grid', 'gap-1', 'gap-sm-2', 'gap-md-3', 'gap-lg-4');
  });

  it('should apply all responsive gap breakpoint classes', () => {
    const { container } = render(
      <DLayout gap={1} gapSm={2} gapMd={3} gapLg={4} gapXl={5} gapXxl={0}>
        Hello
      </DLayout>,
    );
    expect(container.firstChild).toHaveClass(
      'grid',
      'gap-1',
      'gap-sm-2',
      'gap-md-3',
      'gap-lg-4',
      'gap-xl-5',
      'gap-xxl-0',
    );
  });

  it('should only apply provided responsive gap classes', () => {
    const { container } = render(
      <DLayout gap={2} gapLg={4}>
        Hello
      </DLayout>,
    );
    expect(container.firstChild).toHaveClass('grid', 'gap-2', 'gap-lg-4');
    expect(container.firstChild).not.toHaveClass('gap-sm-undefined');
    expect(container.firstChild).not.toHaveClass('gap-md-undefined');
  });

  describe('DLayout.Pane', () => {
    it('should render children', () => {
      const { getByText } = render(<DLayout.Pane>Pane Content</DLayout.Pane>);
      expect(getByText('Pane Content')).toBeInTheDocument();
    });

    it('should apply cols class with string', () => {
      const { container } = render(<DLayout.Pane cols="4">Content</DLayout.Pane>);
      expect(container.firstChild).toHaveClass('g-col-4');
    });

    it('should apply cols class with number', () => {
      const { container } = render(<DLayout.Pane cols={8}>Content</DLayout.Pane>);
      expect(container.firstChild).toHaveClass('g-col-8');
    });

    it('should not apply cols class when cols prop is not provided', () => {
      const { container } = render(<DLayout.Pane>Content</DLayout.Pane>);
      expect(container.firstChild).not.toHaveClass('g-col-undefined');
    });

    it('should apply custom className', () => {
      const { container } = render(<DLayout.Pane cols="4" className="custom-pane">Content</DLayout.Pane>);
      expect(container.firstChild).toHaveClass('g-col-4', 'custom-pane');
    });

    it('should apply responsive column classes', () => {
      const { container } = render(
        <DLayout.Pane cols={12} colsSm={6} colsMd={4} colsLg={3}>
          Content
        </DLayout.Pane>,
      );
      expect(container.firstChild).toHaveClass('g-col-12', 'g-col-sm-6', 'g-col-md-4', 'g-col-lg-3');
    });

    it('should apply all responsive breakpoint classes', () => {
      const { container } = render(
        <DLayout.Pane colsXs={12} colsSm={6} colsMd={4} colsLg={3} colsXl={2} colsXxl={1}>
          Content
        </DLayout.Pane>,
      );
      expect(container.firstChild).toHaveClass(
        'g-col-12',
        'g-col-sm-6',
        'g-col-md-4',
        'g-col-lg-3',
        'g-col-xl-2',
        'g-col-xxl-1',
      );
    });

    it('should render full layout with panes', () => {
      const { container } = render(
        <DLayout>
          <DLayout.Pane cols="4">Pane 1</DLayout.Pane>
          <DLayout.Pane cols="8">Pane 2</DLayout.Pane>
        </DLayout>,
      );
      const layout = container.firstChild;
      expect(layout).toHaveClass('grid');
      const panes = layout?.childNodes;
      expect(panes?.[0]).toHaveClass('g-col-4');
      expect(panes?.[1]).toHaveClass('g-col-8');
    });
  });
});
