/// <reference types="@testing-library/jest-dom" />

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

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          style="--bs-form-control-component-text-align: center;"
        >
          <div
            class="input-group"
          >
            <button
              aria-label="decrease action"
              class="input-group-text"
              disabled=""
              id="counterStart"
              type="button"
            >
              <i
                class="d-icon bi bi-dash-square"
                style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
              />
            </button>
            <input
              aria-describedby="counterStart counterEnd"
              class="form-control"
              id="counter"
              type="number"
              value="0"
            />
            <button
              aria-label="increase action"
              class="input-group-text"
              id="counterEnd"
              type="button"
            >
              <i
                class="d-icon bi bi-plus-square"
                style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
              />
            </button>
          </div>
        </div>
      </div>
    `);
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
});
