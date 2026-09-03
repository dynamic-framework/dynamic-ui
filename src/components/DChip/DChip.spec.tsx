/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DChip from './DChip';
import { DContextProvider } from '../../contexts';

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

  it('falls back to context icon configuration when no icon family props are provided', () => {
    const { container } = render(
      <DContextProvider
        icon={{
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        }}
      >
        <DChip icon="heart" text="Chip content" showClose />
      </DContextProvider>,
    );

    const icons = container.querySelectorAll('.d-icon');
    expect(icons).toHaveLength(2);
    icons.forEach((icon) => {
      expect(icon.className).toContain('material-symbols-outlined');
      expect(icon.tagName).toBe('I');
    });
    expect(icons[0]).toHaveTextContent('heart');
    expect(icons[1]).toHaveTextContent('X');
  });

  it('prioritizes local icon family props over context configuration', () => {
    const { container } = render(
      <DContextProvider
        icon={{
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        }}
      >
        <DChip
          icon="Heart"
          iconMaterialStyle={false}
          iconFamilyClass="bi"
          iconFamilyPrefix="bi-"
          text="Chip content"
          showClose
          iconCloseMaterialStyle={false}
          iconCloseFamilyClass="bi"
          iconCloseFamilyPrefix="bi-"
        />
      </DContextProvider>,
    );

    const icons = container.querySelectorAll('.d-icon');
    expect(icons).toHaveLength(2);
    icons.forEach((icon) => {
      expect(icon.className).not.toContain('material-symbols-outlined');
      expect(icon.querySelector('svg')).toBeInTheDocument();
    });
  });
});
