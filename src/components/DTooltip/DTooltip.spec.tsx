import userEvent from '@testing-library/user-event';
import { act } from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import DTooltip from './DTooltip';

describe('<DTooltip />', () => {
  const tooltipText = 'Tooltip text';

  it('Render component', () => {
    render(
      <DTooltip Component={<span>Hover me</span>}>
        {tooltipText}
      </DTooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('Default tooltip should show on hover', async () => {
    render(
      <DTooltip
        withHover
        Component={<span>Hover me</span>}
      >
        {tooltipText}
      </DTooltip>,
    );

    const button = screen.getByText('Hover me');

    await act(async () => {
      await userEvent.hover(button);
    });

    await waitFor(() => {
      expect(within(document.body).getByText(tooltipText)).toBeInTheDocument();
    });
  });

  it('Show tooltip on Click event', async () => {
    render(
      <DTooltip
        withClick
        Component={<button type="button">Click me</button>}
      >
        {tooltipText}
      </DTooltip>,
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(tooltipText)).toBeInTheDocument();
    });
  });

  it('Show tooltip inmediatly if open=true', () => {
    render(
      <DTooltip
        open
        Component={<span>Tooltip target</span>}
      >
        {tooltipText}
      </DTooltip>,
    );

    expect(screen.getByText(tooltipText)).toBeInTheDocument();
  });

  it('Not show tooltip if open=false and not interacted', () => {
    render(
      <DTooltip
        open={false}
        Component={<span>No tooltip yet</span>}
      >
        {tooltipText}
      </DTooltip>,
    );

    expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
  });

  it('Custom classnames should be applied, size and theme', () => {
    render(
      <DTooltip
        open
        className="custom-tooltip"
        theme="light"
        size="sm"
        Component={<span>Target</span>}
      >
        {tooltipText}
      </DTooltip>,
    );
    const tooltip = screen.getByText(tooltipText).closest('div.tooltip');
    expect(tooltip).toHaveClass('tooltip-light');
    expect(tooltip).toHaveClass('tooltip-sm');
    expect(tooltip).toHaveClass('custom-tooltip');
  });

  it('Text danger theme should show tooltip with tooltip-danger classname', () => {
    render(
      <DTooltip
        open
        theme="danger"
        Component={<span>Target</span>}
      >
        {tooltipText}
      </DTooltip>,
    );

    const tooltip = screen.getByText(tooltipText).closest('div.tooltip');
    expect(tooltip).toHaveClass('tooltip-danger');
  });

  it('Text withFocus should show tooltip', async () => {
    render(
      <DTooltip
        withFocus
        Component={<button type="button">Focus me</button>}
      >
        {tooltipText}
      </DTooltip>,
    );

    const button = screen.getByText('Focus me');
    await act(async () => {
      await userEvent.tab();
    });
    fireEvent.focus(button);

    await waitFor(() => {
      expect(screen.getByText(tooltipText)).toBeInTheDocument();
    });
  });
});
