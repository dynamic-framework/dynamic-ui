import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DToastBody from './DToastBody';

describe('<DToastBody />', () => {
  it('Render component', () => {
    render(<DToastBody>Mensaje de prueba</DToastBody>);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });

  it('toast className', () => {
    render(<DToastBody>Content body</DToastBody>);
    const toast = screen.getByText('Content body');
    expect(toast).toHaveClass('df-toast-content');
  });

  it('Add custom className', () => {
    render(<DToastBody className="extra-clase">Content body</DToastBody>);
    const toast = screen.getByText('Content body');
    expect(toast).toHaveClass('df-toast-content', 'extra-clase');
  });

  it('Add custom styles', () => {
    const style = { backgroundColor: 'red' };
    render(<DToastBody style={style}>Content body</DToastBody>);
    const toast = screen.getByText('Content body');
    expect(toast).toHaveStyle('background-color: rgb(255, 0, 0)');
  });
});
