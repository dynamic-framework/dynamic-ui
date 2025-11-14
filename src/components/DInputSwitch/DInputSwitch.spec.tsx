/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputSwitch from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSwitch />', () => {
  describe('Rendering and Props', () => {
    it('should render a base switch', () => {
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
            class="form-check"
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

    it('should be checked when the checked prop is true', () => {
      render(
        <DContextProvider>
          <DInputSwitch label="My Switch" checked />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('My Switch');
      expect(switchControl).toBeChecked();
    });

    it('should be disabled when the disabled prop is true', () => {
      render(
        <DContextProvider>
          <DInputSwitch label="My Switch" disabled />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('My Switch');
      expect(switchControl).toBeDisabled();
    });

    it('should show an invalid state', () => {
      render(
        <DContextProvider>
          <DInputSwitch label="My Switch" invalid />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('My Switch');
      expect(switchControl).toHaveClass('is-invalid');
    });

    it('should show a valid state', () => {
      render(
        <DContextProvider>
          <DInputSwitch label="My Switch" valid />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('My Switch');
      expect(switchControl).toHaveClass('is-valid');
    });
  });

  describe('User Interaction and Events', () => {
    it('should call onChange with the correct boolean value when clicked', async () => {
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

    it('should not call onChange when it is read-only', async () => {
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

    it('should function as a controlled component', async () => {
      const user = userEvent.setup();
      let isChecked = false;
      const handleChange = (newValue: boolean) => {
        isChecked = newValue;
      };

      const { rerender } = render(
        <DContextProvider>
          <DInputSwitch label="Controlled Switch" checked={isChecked} onChange={handleChange} />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('Controlled Switch');
      expect(switchControl).not.toBeChecked();

      await user.click(switchControl);

      rerender(
        <DContextProvider>
          <DInputSwitch label="Controlled Switch" checked={isChecked} onChange={handleChange} />
        </DContextProvider>,
      );

      expect(switchControl).toBeChecked();
    });

    it('should cover the internal state update by re-rendering with a new callback', async () => {
      const user = userEvent.setup();
      const handleChange1 = jest.fn();
      const handleChange2 = jest.fn();

      const { rerender } = render(
        <DContextProvider>
          <DInputSwitch label="Test Switch" onChange={handleChange1} />
        </DContextProvider>,
      );

      const switchControl = screen.getByLabelText('Test Switch');

      await user.click(switchControl);
      expect(handleChange1).toHaveBeenCalledTimes(1);

      rerender(
        <DContextProvider>
          <DInputSwitch label="Test Switch" onChange={handleChange2} />
        </DContextProvider>,
      );

      await user.click(switchControl);
      expect(handleChange2).toHaveBeenCalledTimes(1);
    });
  });
});
