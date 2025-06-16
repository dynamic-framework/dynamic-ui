import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DToastHeader from './DToastHeader';

describe('<DToastHeader />', () => {
  it('Render component', () => {
    render(<DToastHeader>Mensaje de prueba</DToastHeader>);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });

  it('toast className', () => {
    render(<DToastHeader>Content</DToastHeader>);
    const toast = screen.getByText('Content');
    expect(toast).toHaveClass('toast-header');
  });

  it('Add custom className', () => {
    render(<DToastHeader className="extra-clase">Content</DToastHeader>);
    const toast = screen.getByText('Content');
    expect(toast).toHaveClass('toast-header', 'extra-clase');
  });

  it('Add custom styles', () => {
    const style = { backgroundColor: 'red' };
    render(<DToastHeader style={style}>Content</DToastHeader>);
    const toast = screen.getByText('Content');
    expect(toast).toHaveStyle('background-color: red');
  });
});
