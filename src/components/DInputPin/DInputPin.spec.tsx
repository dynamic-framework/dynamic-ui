/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputPin from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputPin />', () => {
  describe('Rendering and Props', () => {
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

  describe('User Interaction', () => {
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

    it('handles backspace on the first input correctly', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(
        <DContextProvider>
          <DInputPin onChange={handleChange} />
        </DContextProvider>,
      );

      const inputs = screen.getAllByRole('textbox');
      const firstInput = inputs[0];

      await user.click(firstInput);
      await user.keyboard('1');

      await user.click(firstInput);
      expect(firstInput).toHaveFocus();

      await user.keyboard('{Backspace}');

      expect(firstInput).toHaveValue('');
      expect(handleChange).toHaveBeenLastCalledWith('');
    });

    it('blurs the input on wheel event', async () => {
      const user = userEvent.setup();
      render(
        <DContextProvider>
          <DInputPin />
        </DContextProvider>,
      );
      const inputs = screen.getAllByRole('textbox');
      const firstInput = inputs[0];

      await user.click(firstInput);
      expect(document.activeElement).toBe(firstInput);

      fireEvent.wheel(firstInput);

      expect(document.activeElement).not.toBe(firstInput);
    });

    describe('when pasting content', () => {
      it('handles pasting a numeric value', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();
        render(
          <DContextProvider>
            <DInputPin onChange={handleChange} />
          </DContextProvider>,
        );

        const inputs = screen.getAllByRole('textbox');
        await user.click(inputs[0]);
        await user.paste('5678');

        expect(inputs[0]).toHaveValue('5');
        expect(inputs[1]).toHaveValue('6');
        expect(inputs[2]).toHaveValue('7');
        expect(inputs[3]).toHaveValue('8');
        expect(handleChange).toHaveBeenLastCalledWith('5678');
      });

      it('should clean non-numeric characters if type is "number"', () => {
        const handleChange = jest.fn();
        render(
          <DContextProvider>
            <DInputPin onChange={handleChange} type="number" />
          </DContextProvider>,
        );
        const firstInput = screen.getAllByRole('spinbutton')[0];

        fireEvent.paste(firstInput, {
          clipboardData: { getData: () => 'abc123xyz' },
        });

        expect(handleChange).toHaveBeenLastCalledWith('123');
      });

      it('should not clean characters if type is "text"', () => {
        const handleChange = jest.fn();
        render(
          <DContextProvider>
            <DInputPin onChange={handleChange} type="text" />
          </DContextProvider>,
        );
        const firstInput = screen.getAllByRole('textbox')[0];

        fireEvent.paste(firstInput, {
          clipboardData: { getData: () => 'a1b2' },
        });

        expect(handleChange).toHaveBeenLastCalledWith('a1b2');
      });
    });
  });
});
