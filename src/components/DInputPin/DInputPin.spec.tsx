/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputPin from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputPin />', () => {
  it('should render my component', () => {
    const { container } = render(
      <DContextProvider>
        <DInputPin id="myPin" />
      </DContextProvider>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-input-pin"
        >
          <div
            class="d-input-pin-group"
            id="myPin"
          >
            <input
              aria-describedby="myPinState"
              autocomplete="off"
              class="form-control"
              id="pinIndex0"
              inputmode="text"
              maxlength="1"
              name="pin-0"
              required=""
              type="text"
              value=""
            />
            <input
              aria-describedby="myPinState"
              autocomplete="off"
              class="form-control"
              id="pinIndex1"
              inputmode="text"
              maxlength="1"
              name="pin-1"
              required=""
              type="text"
              value=""
            />
            <input
              aria-describedby="myPinState"
              autocomplete="off"
              class="form-control"
              id="pinIndex2"
              inputmode="text"
              maxlength="1"
              name="pin-2"
              required=""
              type="text"
              value=""
            />
            <input
              aria-describedby="myPinState"
              autocomplete="off"
              class="form-control"
              id="pinIndex3"
              inputmode="text"
              maxlength="1"
              name="pin-3"
              required=""
              type="text"
              value=""
            />
          </div>
        </div>
      </div>
    `);
  });

  it('handles typing and calls onChange with the complete value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputPin onChange={handleChange} />
      </DContextProvider>,
    );

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '1234');

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    expect(inputs[3]).toHaveValue('4');
    expect(handleChange).toHaveBeenLastCalledWith('1234');
  });

  it('handles backspace and updates value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputPin onChange={handleChange} />
      </DContextProvider>,
    );

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123');

    expect(handleChange).toHaveBeenLastCalledWith('123');

    await user.keyboard('{Backspace}');

    expect(inputs[2]).toHaveValue('');
    expect(handleChange).toHaveBeenLastCalledWith('12');
  });

  it('handles pasting a value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputPin onChange={handleChange} />
      </DContextProvider>,
    );

    const inputs = screen.getAllByRole('textbox');
    inputs[0].focus();
    await user.paste('5678');

    expect(inputs[0]).toHaveValue('5');
    expect(inputs[1]).toHaveValue('6');
    expect(inputs[2]).toHaveValue('7');
    expect(inputs[3]).toHaveValue('8');
    expect(handleChange).toHaveBeenLastCalledWith('5678');
  });

  it('renders a different length based on prop', () => {
    render(
      <DContextProvider>
        <DInputPin characters={6} />
      </DContextProvider>,
    );
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(6);
  });

  it('renders as number type when prop is passed', () => {
    render(
      <DContextProvider>
        <DInputPin type="number" />
      </DContextProvider>,
    );
    const inputs = screen.getAllByRole('spinbutton');
    inputs.forEach((input) => {
      expect(input).toHaveAttribute('type', 'number');
    });
  });

  it('shows invalid state', () => {
    render(
      <DContextProvider>
        <DInputPin invalid />
      </DContextProvider>,
    );
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => {
      expect(input).toHaveClass('is-invalid');
    });
  });
});
