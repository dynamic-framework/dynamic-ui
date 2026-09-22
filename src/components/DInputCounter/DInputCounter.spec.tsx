/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DInputCounter from './DInputCounter';

describe('<DInputCounter />', () => {
  it('should render base counter', () => {
    const props = {
      id: 'counter',
      minValue: 0,
      maxValue: 10,
      value: 0,
    };

    const { container } = render(
      <DInputCounter
        id={props.id}
        minValue={props.minValue}
        maxValue={props.maxValue}
        value={props.value}
      />,
    );

    const input = container.querySelector('#counter');
    const decreaseBtn = container.querySelector('button[aria-label="decrease action"]');
    const increaseBtn = container.querySelector('button[aria-label="increase action"]');
    const decreaseIcon = decreaseBtn?.querySelector('.d-icon');
    const increaseIcon = increaseBtn?.querySelector('.d-icon');

    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveValue(0);
    expect(decreaseBtn).toBeDisabled();
    expect(increaseBtn).not.toBeDisabled();
    expect(decreaseIcon?.querySelector('svg')).toBeInTheDocument();
    expect(increaseIcon?.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with initial value', () => {
    render(
      <DInputCounter
        minValue={0}
        maxValue={10}
        value={5}
      />,
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(5);
  });

  it('calls onChange when typing a new value', () => {
    const handleChange = jest.fn();

    render(
      <DInputCounter
        minValue={0}
        maxValue={10}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '3' } });
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('decreases value on iconStart click', () => {
    const handleChange = jest.fn();

    render(
      <DInputCounter
        minValue={0}
        maxValue={10}
        value={5}
        onChange={handleChange}
      />,
    );

    const decreaseButton = screen.getByLabelText('decrease action');
    fireEvent.click(decreaseButton);
    expect(handleChange).toHaveBeenLastCalledWith(4);
  });

  it('increases value on iconEnd click', () => {
    const handleChange = jest.fn();

    render(
      <DInputCounter
        minValue={0}
        maxValue={10}
        value={5}
        onChange={handleChange}
      />,
    );

    const increaseButton = screen.getByLabelText('increase action');
    fireEvent.click(increaseButton);
    expect(handleChange).toHaveBeenLastCalledWith(6);
  });

  it('disables decrease button at minValue', () => {
    render(
      <DInputCounter
        minValue={1}
        maxValue={10}
        value={1}
      />,
    );

    const decreaseButton = screen.getByLabelText('decrease action');
    expect(decreaseButton).toBeDisabled();
  });

  it('disables increase button at maxValue', () => {
    render(
      <DInputCounter
        minValue={0}
        maxValue={5}
        value={5}
      />,
    );

    const increaseButton = screen.getByLabelText('increase action');
    expect(increaseButton).toBeDisabled();
  });

  describe('controlled and uncontrolled modes', () => {
    it('reverts to the prop when the parent rejects the change', () => {
      function Rejecting() {
        const [value] = useState(1);
        return (
          <DInputCounter minValue={0} maxValue={10} value={value} onChange={() => {}} />
        );
      }

      render(<Rejecting />);
      const input = screen.getByRole('spinbutton');

      fireEvent.click(screen.getByLabelText('increase action'));

      expect(input).toHaveValue(1);
    });

    it('follows the prop when the parent accepts the change', () => {
      function Accepting() {
        const [value, setValue] = useState(1);
        return (
          <DInputCounter
            minValue={0}
            maxValue={10}
            value={value}
            onChange={(next) => setValue(next ?? 0)}
          />
        );
      }

      render(<Accepting />);
      const input = screen.getByRole('spinbutton');

      fireEvent.click(screen.getByLabelText('increase action'));
      expect(input).toHaveValue(2);

      fireEvent.click(screen.getByLabelText('decrease action'));
      expect(input).toHaveValue(1);
    });

    it('counts on its own when no value prop is passed', () => {
      render(<DInputCounter minValue={0} maxValue={10} />);
      const input = screen.getByRole('spinbutton');

      fireEvent.click(screen.getByLabelText('increase action'));

      expect(input).toHaveValue(1);
    });

    it('starts from defaultValue and keeps counting', () => {
      render(<DInputCounter minValue={0} maxValue={10} defaultValue={4} />);
      const input = screen.getByRole('spinbutton');

      expect(input).toHaveValue(4);

      fireEvent.click(screen.getByLabelText('increase action'));
      expect(input).toHaveValue(5);
    });

    it('keeps a value without onChange as a starting value, not a lock', () => {
      render(<DInputCounter minValue={0} maxValue={10} value={3} />);
      const input = screen.getByRole('spinbutton');

      expect(input).toHaveValue(3);

      fireEvent.click(screen.getByLabelText('increase action'));
      expect(input).toHaveValue(4);
    });

    it('still applies a value without onChange that is changed from outside', () => {
      function External() {
        const [value, setValue] = useState(1);
        return (
          <>
            <button type="button" onClick={() => setValue(7)}>set to 7</button>
            <DInputCounter minValue={0} maxValue={10} value={value} />
          </>
        );
      }

      render(<External />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveValue(1);

      fireEvent.click(screen.getByText('set to 7'));

      expect(input).toHaveValue(7);
    });

    it('reports the starting value through onChange once on mount', () => {
      const handleChange = jest.fn();

      const { rerender } = render(
        <DInputCounter minValue={2} maxValue={10} onChange={handleChange} />,
      );

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(2);

      rerender(<DInputCounter minValue={2} maxValue={10} onChange={() => { handleChange(); }} />);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
