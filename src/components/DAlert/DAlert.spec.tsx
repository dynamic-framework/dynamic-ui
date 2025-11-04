/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ComponentStateColor } from '../interface';
import DAlert from './DAlert';

describe('<DAlert />', () => {
  it('should render info alert', () => {
    const props = {
      color: 'info',
      text: 'Alert content',
      id: 'alertID',
    };

    const { container } = render(
      <DAlert
        id={props.id}
        color={props.color as ComponentStateColor}
      >
        {props.text}
      </DAlert>,
    );

    const alert = container.querySelector('#alertID');
    const icon = alert?.querySelector('.d-icon');

    expect(alert).toHaveClass('alert', 'alert-info');
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('Renders with default color and icon', () => {
    const message = 'Success message';

    render(<DAlert>{message}</DAlert>);
    const alert = screen.getByRole('alert');
    const icon = alert.querySelector('.d-icon');

    expect(alert).toHaveClass('alert-success');
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('Renders close button when showClose is true', () => {
    const onClose = jest.fn();

    render(
      <DAlert
        showClose
        onClose={onClose}
      >
        Alert content
      </DAlert>,

    );
    const button = screen.getByRole('button', { name: 'Close' });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });

  it('Applies custom id and className', () => {
    render(
      <DAlert
        id="custom-id"
        className="my-alert"
      >
        Alert content
      </DAlert>,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('id', 'custom-id');
    expect(alert).toHaveClass('my-alert');
  });

  it('Applies custom styles and data attributes', () => {
    render(
      <DAlert
        style={{ color: 'red' }}
        dataAttributes={{ 'data-test': 'alert' }}
      >
        Alert content
      </DAlert>,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveStyle({ color: 'red' });
    expect(alert).toHaveAttribute('data-test', 'alert');
  });

  it('Render with material icons style enabled', () => {
    render(
      <DAlert
        showClose
        iconCloseMaterialStyle
        iconCloseFamilyPrefix=""
        iconCloseFamilyClass="material-symbols-outlined"
        iconClose="x"
        iconMaterialStyle
        iconFamilyPrefix=""
        iconFamilyClass="material-symbols-outlined"
        icon="heart"
      >
        Alert content
      </DAlert>,
    );

    const alertIcon = screen.getByRole('alert').querySelector('.d-icon');
    expect(alertIcon?.className).toContain('material-symbols-outlined');
    expect(alertIcon).toHaveTextContent('heart');
    expect(alertIcon?.tagName).toBe('I');

    const closeIcon = screen.getByRole('button').querySelector('.d-icon');
    expect(closeIcon?.className).toContain('material-symbols-outlined');
    expect(closeIcon).toHaveTextContent('x');
    expect(closeIcon?.tagName).toBe('I');
  });

  it('renders custom close icon if provided', () => {
    render(
      <DAlert
        showClose
        iconClose="CircleX"
      >
        Alert content
      </DAlert>,
    );
    const button = screen.getByRole('button');
    const closeIcon = button.querySelector('.d-icon');
    expect(closeIcon).toBeInTheDocument();
    expect(closeIcon?.querySelector('svg')).toBeInTheDocument();
  });
});
