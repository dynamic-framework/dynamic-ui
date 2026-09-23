/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
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

    it('proposes from the prop on every step while the parent rejects', () => {
      const seen: Array<number | undefined> = [];

      function Rejecting() {
        const [value] = useState(1);
        return (
          <DInputCounter
            minValue={0}
            maxValue={10}
            value={value}
            onChange={(next) => { seen.push(next); }}
          />
        );
      }

      render(<Rejecting />);
      const input = screen.getByRole('spinbutton');
      const increase = screen.getByLabelText('increase action');

      seen.length = 0;
      fireEvent.click(increase);
      fireEvent.click(increase);
      fireEvent.click(increase);

      // A rejection that changes no state re-renders nothing, so a step that
      // moved a value of its own would climb away from the prop and report a
      // number further from it on every click.
      expect(input).toHaveValue(1);
      expect(seen).toEqual([2, 2, 2]);
    });

    it('does not run past a parent that caps the value', () => {
      const seen: Array<number | undefined> = [];

      function Capping() {
        const [value, setValue] = useState(1);
        return (
          <DInputCounter
            minValue={0}
            maxValue={10}
            value={value}
            onChange={(next) => {
              seen.push(next);
              setValue(Math.min(next ?? 0, 2));
            }}
          />
        );
      }

      render(<Capping />);
      const input = screen.getByRole('spinbutton');
      const increase = screen.getByLabelText('increase action');

      seen.length = 0;
      fireEvent.click(increase);
      fireEvent.click(increase);
      fireEvent.click(increase);

      expect(input).toHaveValue(2);
      expect(seen).toEqual([2, 3, 3]);
    });

    it('keeps every step when several land in the same batch', () => {
      const handleChange = jest.fn();

      render(<DInputCounter minValue={0} maxValue={10} onChange={handleChange} />);
      const input = screen.getByRole('spinbutton');
      const increase = screen.getByLabelText('increase action');

      handleChange.mockClear();
      // No render happens between the two, so the second step has to start
      // from the first instead of reading a stale value and collapsing into it.
      act(() => {
        increase.click();
        increase.click();
      });

      expect(input).toHaveValue(2);
      expect(handleChange.mock.calls.flat()).toEqual([1, 2]);
    });

    it('clamps a batch at the bound and reports it once', () => {
      const handleChange = jest.fn();

      render(
        <DInputCounter minValue={0} maxValue={10} defaultValue={1} onChange={handleChange} />,
      );
      const input = screen.getByRole('spinbutton');
      const decrease = screen.getByLabelText('decrease action');

      handleChange.mockClear();
      act(() => {
        decrease.click();
        decrease.click();
        decrease.click();
      });

      expect(input).toHaveValue(0);
      expect(handleChange.mock.calls.flat()).toEqual([0]);
    });

    it('re-seeds to minValue when it moves and no starting value was given', () => {
      const handleChange = jest.fn();

      const { rerender } = render(
        <DInputCounter minValue={0} maxValue={10} onChange={handleChange} />,
      );
      const input = screen.getByRole('spinbutton');

      fireEvent.click(screen.getByLabelText('increase action'));
      fireEvent.click(screen.getByLabelText('increase action'));
      expect(input).toHaveValue(2);

      handleChange.mockClear();
      rerender(<DInputCounter minValue={5} maxValue={10} onChange={handleChange} />);

      expect(input).toHaveValue(5);
      expect(handleChange).toHaveBeenCalledWith(5);
    });

    it('leaves the value alone when minValue moves and a starting value was given', () => {
      const { rerender } = render(
        <DInputCounter minValue={0} maxValue={10} defaultValue={2} />,
      );
      const input = screen.getByRole('spinbutton');

      rerender(<DInputCounter minValue={5} maxValue={10} defaultValue={2} />);

      expect(input).toHaveValue(2);
    });

    it('reports the starting value to an onChange attached after mount', () => {
      const handleChange = jest.fn();

      const { rerender } = render(<DInputCounter minValue={2} maxValue={10} />);

      rerender(<DInputCounter minValue={2} maxValue={10} onChange={handleChange} />);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(2);
    });
  });
});
