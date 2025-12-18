/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DChip from './DChip';

describe('<DChip />', () => {
  it('should render a chip', () => {
    const { container } = render(
      <DChip
        color="primary"
        text="Chip content"
        showClose
      />,
    );

    const chip = container.querySelector('.d-chip');
    const closeButton = container.querySelector('button[aria-label="close"]');
    const icon = closeButton?.querySelector('.d-icon');

    expect(chip).toHaveClass('d-chip-primary');
    expect(screen.getByText('Chip content')).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('should render the text', () => {
    render(
      <DChip
        text="Chip content"
      />,
    );

    expect(screen.getByText('Chip content')).toBeInTheDocument();
  });

  it('should apply the default color', () => {
    const { container } = render(
      <DChip
        text="Chip content"
      />,
    );

    expect(container.firstChild).toHaveClass('d-chip', 'd-chip-primary');
  });

  it('should render the icon passed by props', () => {
    const { container } = render(
      <DChip
        icon="Heart"
        text="Chip content"
      />,
    );

    const icon = container.querySelector('.d-icon');
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('should render a close button if showClose is passed', () => {
    render(
      <DChip
        text="Chip content"
        showClose
      />,
    );

    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onClose when the onClick is passed', () => {
    const onClose = jest.fn();

    const { getByRole } = render(
      <DChip
        text="Chip content"
        showClose
        onClose={onClose}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should apply custom styles and classNames', () => {
    const { container } = render(
      <DChip
        text="Chip content"
        className="extra-class"
        style={{ marginTop: '10px' }}
      />,
    );

    expect(container.firstChild).toHaveClass('extra-class');
    expect(container.firstChild).toHaveStyle({ marginTop: '10px' });
  });
});
