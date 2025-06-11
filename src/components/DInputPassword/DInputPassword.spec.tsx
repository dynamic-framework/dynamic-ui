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

    expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <label
          for="passwordId"
        >
          Label
        </label>
        <div
          class="input-group"
        >
          <input
            aria-describedby="passwordIdEnd"
            class="form-control"
            id="passwordId"
            placeholder="Password"
            type="password"
            value="Value"
          />
          <button
            aria-label="show/hide password"
            class="input-group-text"
            id="passwordIdEnd"
            type="button"
          >
            <i
              class="d-icon bi bi-eye-slash"
              style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
            />
          </button>
        </div>
      </div>
    </div>
  `);
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
