import { render } from '@testing-library/react';
import DBoxFile from './DBoxFile';

it('should render base box file', () => {
  const props = {
    text: 'Upload your file here',
  };

  const { container } = render(
    <DBoxFile
      accept={{
        'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
      }}
    >
      {props.text}
    </DBoxFile>,
  );

  const boxFile = container.querySelector('.df-dropzone-wrapper');
  const dropzone = container.querySelector('.df-dropzone');
  const input = container.querySelector('input[type="file"]');
  const icon = container.querySelector('.df-icon');
  const content = container.querySelector('.df-dropzone-prompt');

  expect(boxFile).toBeInTheDocument();
  expect(dropzone).toBeInTheDocument();
  expect(input).toHaveAttribute('accept', 'image/*,.png,.jpg,.jpeg,.svg');
  expect(icon).toBeInTheDocument();
  expect(icon?.querySelector('svg')).toBeInTheDocument();
  expect(content).toHaveTextContent('Upload your file here');
});

/**
 * The drop target is a named control, or it is not a control at all.
 *
 * It used to carry `role="presentation"` while being focusable and handling
 * clicks and keys. ARIA ignores `presentation` on anything focusable, so the
 * box fell back to a generic role with no name: a screen reader user tabbed to
 * it and heard nothing. Dropping a file is a mouse gesture with no keyboard
 * equivalent, which makes this control the entire keyboard path.
 */
describe('<DBoxFile /> the drop target', () => {
  const accept = { 'image/*': ['.png'] };

  it('should be a named, focusable button', () => {
    const { container } = render(<DBoxFile accept={accept} />);
    const zone = container.querySelector('.df-dropzone')!;

    expect(zone).toHaveAttribute('role', 'button');
    expect(zone).toHaveAttribute('tabindex', '0');
    expect(zone).toHaveAccessibleName();
  });

  it('should take the name it is given', () => {
    const { container } = render(
      <DBoxFile accept={accept} ariaLabel="Attach your payslip" />,
    );

    expect(container.querySelector('.df-dropzone'))
      .toHaveAttribute('aria-label', 'Attach your payslip');
  });

  /**
   * Disabled, but still reachable. A disabled control removed from the tab
   * order is one a screen reader user cannot find to learn why it is
   * unavailable.
   */
  it('should stay focusable when disabled, and say so', () => {
    const { container } = render(<DBoxFile accept={accept} disabled />);
    const zone = container.querySelector('.df-dropzone')!;

    expect(zone).toHaveAttribute('role', 'button');
    expect(zone).toHaveAttribute('tabindex', '0');
    expect(zone).toHaveAttribute('aria-disabled', 'true');
  });

  /**
   * `noKeyboard` drops the role entirely.
   *
   * Claiming to be a button that no keyboard can reach is worse than claiming
   * nothing: it is then a drop surface for the mouse, and providing a control
   * is the caller's job.
   */
  it('should claim no role when it cannot be reached by keyboard', () => {
    const { container } = render(<DBoxFile accept={accept} noKeyboard />);
    const zone = container.querySelector('.df-dropzone')!;

    expect(zone).not.toHaveAttribute('role');
    expect(zone).not.toHaveAttribute('tabindex');
  });
});
