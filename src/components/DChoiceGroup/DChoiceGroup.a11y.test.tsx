import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '../../../tests/a11y/axeHelper';
import DChoiceGroup from '.';

const MATERIALS = [
  { value: 'synthetic', label: 'Synthetic' },
  { value: 'wool', label: 'Wool' },
  { value: 'cotton', label: 'Cotton' },
];

/**
 * The reason this is a component and not a snippet to copy.
 *
 * A control that looks like buttons is usually built by hiding a radio with
 * `display: none` and painting a label over it — which takes the radio out of
 * the tab order and out of the accessibility tree, leaving the whole group
 * unreachable by keyboard. The tests below pin the parts that prevent it.
 */
describe('<DChoiceGroup /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(<DChoiceGroup options={MATERIALS} label="Main material" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when multiple, with a hint', async () => {
    const { container } = render(
      <DChoiceGroup
        multiple
        options={MATERIALS}
        label="Materials"
        hint="Pick every one that applies"
        defaultValue={['wool']}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DChoiceGroup options={MATERIALS} label="Main material" disabled />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when invalid and required', async () => {
    const { container } = render(
      <DChoiceGroup options={MATERIALS} label="Main material" invalid required hint="Required" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with no visible label', async () => {
    const { container } = render(
      <DChoiceGroup options={MATERIALS} ariaLabel="Main material" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  /**
   * The regression guard. A clipped input is still focusable and still
   * announced; one hidden with a display utility is neither, and that is the
   * exact mistake this component exists to stop repeating.
   */
  it('never hides its inputs from the keyboard or the accessibility tree', () => {
    const { container } = render(<DChoiceGroup options={MATERIALS} label="Main material" />);

    container.querySelectorAll('input').forEach((input) => {
      expect(input).not.toHaveClass('d-none');
      expect(input).not.toHaveAttribute('hidden');
      expect(input).not.toHaveAttribute('aria-hidden');
      expect(input).not.toHaveAttribute('tabindex', '-1');
      expect(input.style.display).not.toBe('none');
    });

    // And they are still reachable as controls, which is what the above buys.
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('names the group from the visible label', () => {
    render(<DChoiceGroup options={MATERIALS} label="Main material" />);

    expect(screen.getByRole('group', { name: 'Main material' })).toBeInTheDocument();
  });

  it('names the group from ariaLabel when there is no visible label', () => {
    render(<DChoiceGroup options={MATERIALS} ariaLabel="Main material" />);

    expect(screen.getByRole('group', { name: 'Main material' })).toBeInTheDocument();
  });

  /** A visible label wins: repeating it in `aria-label` would override it. */
  it('lets the visible label win over ariaLabel', () => {
    render(<DChoiceGroup options={MATERIALS} label="Main material" ariaLabel="Something else" />);

    expect(screen.getByRole('group', { name: 'Main material' })).toBeInTheDocument();
  });

  it('names every option', () => {
    render(<DChoiceGroup options={MATERIALS} label="Main material" />);

    MATERIALS.forEach(({ label }) => {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    });
  });
});
