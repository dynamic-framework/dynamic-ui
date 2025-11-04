import { fireEvent, render, screen } from '@testing-library/react';
import DInputPassword from './DInputPassword';

describe('<DInputPassword />', () => {
  it('should render my component', () => {
    const search = {
      id: 'passwordId',
      label: 'Label',
      value: 'Value',
      placeholder: 'Password',
    };

    const { container } = render(
      <DInputPassword
        id={search.id}
        label={search.label}
        value={search.value}
        placeholder={search.placeholder}
      />,
    );

    const input = container.querySelector('#passwordId');
    const button = container.querySelector('button[aria-label="show/hide password"]');
    const icon = button?.querySelector('.d-icon');

    expect(input).toHaveAttribute('type', 'password');
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });

  it('renders input type=password initially', () => {
    render(
      <DInputPassword aria-label="input password" />,
    );

    const input = screen.getByLabelText('input password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('toggles visibility when icon is clicked', () => {
    render(
      <DInputPassword aria-label="input password" />,
    );

    const iconButton = screen.getByLabelText('show/hide password');
    const input = screen.getByLabelText('input password');

    expect(input).toHaveAttribute('type', 'password');
    fireEvent.click(iconButton);
    expect(input).toHaveAttribute('type', 'text');
    fireEvent.click(iconButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('calls onIconEndClick if provided', () => {
    const handleClick = jest.fn();

    render(
      <DInputPassword onIconEndClick={handleClick} />,
    );

    const iconButton = screen.getByLabelText('show/hide password');
    fireEvent.click(iconButton);
    expect(handleClick).toHaveBeenCalled();
  });
});
