/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputSwitch from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSwitch />', () => {
  it('should render base switch', () => {
    const props = {
      id: 'switchTest',
      label: 'toggle',
    };
    const { container } = render(
      <DContextProvider>
        <DInputSwitch {...props} />
      </DContextProvider>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="form-check form-switch"
        >
          <input
            class="form-check-input"
            id="switchTest"
            role="switch"
            type="checkbox"
          />
          <label
            class="form-check-label"
            for="switchTest"
          >
            toggle
          </label>
        </div>
      </div>
    `);
  });

  it('calls onChange with the correct boolean value when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" onChange={handleChange} />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');

    await user.click(switchControl);
    expect(handleChange).toHaveBeenLastCalledWith(true);

    await user.click(switchControl);
    expect(handleChange).toHaveBeenLastCalledWith(false);
  });

  it('is checked when the checked prop is true', () => {
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" checked />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');
    expect(switchControl).toBeChecked();
  });

  it('is disabled when the disabled prop is true', () => {
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" disabled />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');
    expect(switchControl).toBeDisabled();
  });

  it('is read-only and does not call onChange', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" readonly onChange={handleChange} />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');
    await user.click(switchControl);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows an invalid state', () => {
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" invalid />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');
    expect(switchControl).toHaveClass('is-invalid');
  });

  it('shows a valid state', () => {
    render(
      <DContextProvider>
        <DInputSwitch label="My Switch" valid />
      </DContextProvider>,
    );

    const switchControl = screen.getByLabelText('My Switch');
    expect(switchControl).toHaveClass('is-valid');
  });
});
