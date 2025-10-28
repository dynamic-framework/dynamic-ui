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

    expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="alert alert-info"
        id="alertID"
        role="alert"
      >
        <i
          class="d-icon bi bi-info-circle alert-icon"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
        />
        <div
          class="alert-text"
        >
          Alert content
        </div>
      </div>
    </div>
  `);
  });

  it('Renders with default color and icon', () => {
    const message = 'Success message';

    render(<DAlert>{message}</DAlert>);
    expect(screen.getByRole('alert')).toHaveClass('alert-success');
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByRole('alert').querySelector('.bi-check-circle')).toBeInTheDocument();
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
        icon="heart "
      >
        Alert content
      </DAlert>,
    );

    const alert = screen.getByRole('alert').querySelector('i');
    expect(alert?.className).toContain('material-symbols-outlined');
    expect(alert).toHaveTextContent('heart');

    const closeIcon = screen.getByRole('button').querySelector('i');
    expect(closeIcon?.className).toContain('material-symbols-outlined');
    expect(closeIcon).toHaveTextContent('x');
  });

  it('renders custom close icon if provided', () => {
    render(
      <DAlert
        showClose
        iconClose="custom-close"
        iconCloseFamilyClass="mdi"
        iconCloseFamilyPrefix="mdi-"
      >
        Alert content
      </DAlert>,
    );
    const closeIcon = screen.getByRole('button').querySelector('i');
    expect(closeIcon?.className).toContain('mdi');
    expect(closeIcon?.className).toContain('mdi-custom-close');
  });
});
