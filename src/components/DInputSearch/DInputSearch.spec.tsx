/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DInputSearch from './DInputSearch';

describe('<DInputSearch />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render with search defaults', () => {
    const { container } = render(
      <DInputSearch label="Search input" />,
    );

    expect(screen.getByLabelText('Search input')).toHaveAttribute('placeholder', 'Search...');
    expect(container.querySelector('.lucide-search')).toBeInTheDocument();
  });

  it('should call onChange only after debounce', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    fireEvent.change(screen.getByLabelText('Search input'), { target: { value: 'poliza' } });

    expect(handleChange).not.toHaveBeenCalled();

    jest.advanceTimersByTime(299);
    expect(handleChange).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(handleChange).toHaveBeenCalledWith('poliza');
  });

  it('should debounce latest value when typing quickly', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input');
    fireEvent.change(input, { target: { value: 'p' } });
    fireEvent.change(input, { target: { value: 'po' } });
    fireEvent.change(input, { target: { value: 'pol' } });

    jest.advanceTimersByTime(300);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('pol');
  });

  it('should call onImmediateChange without debounce', () => {
    const handleImmediateChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        onImmediateChange={handleImmediateChange}
      />,
    );

    fireEvent.change(screen.getByLabelText('Search input'), { target: { value: 'abc' } });

    expect(handleImmediateChange).toHaveBeenCalledWith('abc');
  });

  it('should call onChange immediately when debounceMs is zero', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        debounceMs={0}
        onChange={handleChange}
      />,
    );

    fireEvent.change(screen.getByLabelText('Search input'), { target: { value: 'transaccion' } });

    expect(handleChange).toHaveBeenCalledWith('transaccion');
  });
});
