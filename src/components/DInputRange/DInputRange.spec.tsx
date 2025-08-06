/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DInputRange from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputRange />', () => {
  describe('Rendering and Props', () => {
    it('should render correctly with all props', () => {
      const props = {
        id: 'range',
        min: 0,
        max: 10,
        step: 2,
        value: 4,
        label: 'Range',
        readOnly: true,
      };

      const { container } = render(
        <DContextProvider>
          <DInputRange {...props} />
        </DContextProvider>,
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <label
            class="form-label"
            for="range"
          >
            Range
          </label>
          <input
            class="form-range form-range-value-indicator"
            id="range"
            max="10"
            min="0"
            readonly=""
            step="2"
            style="--bs-form-range-component-value: 40%;"
            type="range"
            value="4"
          />
        </div>
      `);
    });

    it('should be disabled when disabled prop is true', () => {
      render(
        <DContextProvider>
          <DInputRange label="Disabled Range" disabled />
        </DContextProvider>,
      );

      const slider = screen.getByLabelText('Disabled Range');
      expect(slider).toBeDisabled();
    });

    it('should not show the value indicator if filledValue is false', () => {
      render(
        <DContextProvider>
          <DInputRange label="No Fill Range" filledValue={false} onChange={() => { }} />
        </DContextProvider>,
      );

      const slider = screen.getByLabelText('No Fill Range');
      expect(slider).not.toHaveClass('form-range-value-indicator');
    });

    it('should render correctly without a label', () => {
      const { container } = render(
        <DContextProvider>
          <DInputRange onChange={() => { }} />
        </DContextProvider>,
      );

      expect(container.querySelector('label')).not.toBeInTheDocument();
    });
  });

  describe('Interaction and State Changes', () => {
    it('should call onChange when moved', () => {
      const handleChange = jest.fn();
      render(
        <DContextProvider>
          <DInputRange label="My Range" onChange={handleChange} />
        </DContextProvider>,
      );

      const slider = screen.getByLabelText('My Range');
      fireEvent.change(slider, { target: { value: '75' } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should update its value when the value prop changes', () => {
      const { rerender } = render(
        <DContextProvider>
          <DInputRange label="My Range" value={0} onChange={() => { }} />
        </DContextProvider>,
      );

      const slider = screen.getByLabelText('My Range');
      expect(slider).toHaveValue('0');

      rerender(
        <DContextProvider>
          <DInputRange label="My Range" value={75} onChange={() => { }} />
        </DContextProvider>,
      );

      expect(slider).toHaveValue('75');
    });
  });
});
