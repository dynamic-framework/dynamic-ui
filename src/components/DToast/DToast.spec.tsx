import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DToast from './DToast';

describe('<DToast />', () => {
  it('Render component', () => {
    render(<DToast>Mensaje de prueba</DToast>);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });

  it('toast className', () => {
    render(<DToast>Contenido</DToast>);
    const toast = screen.getByRole('alert');
    expect(toast).toHaveClass('toast');
  });

  it('Add custom className', () => {
    render(<DToast className="extra-clase">Contenido</DToast>);
    const toast = screen.getByRole('alert');
    expect(toast).toHaveClass('toast', 'extra-clase');
  });

  it('Add custom styles', () => {
    const style = { backgroundColor: 'red' };
    render(<DToast style={style}>Contenido</DToast>);
    const toast = screen.getByRole('alert');
    expect(toast).toHaveStyle('background-color: red');
  });

  it('Add data-testId', () => {
    render(
      <DToast dataAttributes={{ 'data-testid': 'mi-toast' }}>
        Contenido
      </DToast>,
    );
    expect(screen.getByTestId('mi-toast')).toBeInTheDocument();
  });

  it('Verify area attribute', () => {
    render(<DToast>Contenido</DToast>);
    const toast = screen.getByRole('alert');
    expect(toast).toHaveAttribute('aria-live', 'assertive');
    expect(toast).toHaveAttribute('aria-atomic', 'true');
  });
});
