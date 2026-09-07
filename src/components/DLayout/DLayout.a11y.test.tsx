import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DLayout from '.';

describe('<DLayout /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(<DLayout>Hello</DLayout>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with gap and columns', async () => {
    const { container } = render(
      <DLayout gap={4} columns={12} className="custom-class">
        Hello
      </DLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with panes', async () => {
    const { container } = render(
      <DLayout>
        <DLayout.Pane cols="4">Pane 1</DLayout.Pane>
        <DLayout.Pane cols="8">Pane 2</DLayout.Pane>
      </DLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with responsive gap and pane column classes', async () => {
    const { container } = render(
      <DLayout gap={1} gapSm={2} gapMd={3} gapLg={4} gapXl={5} gapXxl={0}>
        <DLayout.Pane colsXs={12} colsSm={6} colsMd={4} colsLg={3} colsXl={2} colsXxl={1}>
          Content
        </DLayout.Pane>
      </DLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
