/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/// <reference types="@testing-library/jest-dom" />

import {
  act,
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
    render(
      <DInputSearch label="Search input" />,
    );

    const input = screen.getByLabelText('Search input');
    expect(input).toHaveAttribute('placeholder', 'Search...');
    expect(input).toHaveAttribute('type', 'search');
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

    act(() => { jest.advanceTimersByTime(299); });
    expect(handleChange).not.toHaveBeenCalled();

    act(() => { jest.advanceTimersByTime(1); });
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

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'p' } });
    fireEvent.change(input, { target: { value: 'po' } });
    fireEvent.change(input, { target: { value: 'pol' } });

    act(() => { jest.advanceTimersByTime(300); });

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

  it('should keep input displayed value unchanged in controlled mode without onImmediateChange but still emit debounced onChange', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        value="fixed"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    expect(input.value).toBe('fixed');

    fireEvent.change(input, { target: { value: 'attempted change' } });

    // display stays frozen because parent hasn't updated value prop
    expect(input.value).toBe('fixed');
    expect(handleChange).not.toHaveBeenCalled();

    act(() => { jest.advanceTimersByTime(300); });
    // but onChange fires with what the user typed so the parent can decide to update
    expect(handleChange).toHaveBeenCalledWith('attempted change');
  });

  it('should support value + onChange without onImmediateChange (common controlled pattern)', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        value=""
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'account' } });

    expect(handleChange).not.toHaveBeenCalled();

    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('account');
  });

  it('should reflect parent value update after onChange and not fire onChange again (full controlled loop)', () => {
    const handleChange = jest.fn();

    const { rerender } = render(
      <DInputSearch
        label="Search input"
        value=""
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'account' } });

    // display stays frozen while debounce is pending
    expect(input.value).toBe('');

    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).toHaveBeenCalledWith('account');

    // parent responds to onChange by updating value
    rerender(
      <DInputSearch
        label="Search input"
        value="account"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    expect(input.value).toBe('account');
    // value update from parent must not trigger a second onChange
    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should support controlled mode with onImmediateChange and keep debounced onChange working', () => {
    const handleImmediateChange = jest.fn();
    const handleChange = jest.fn();

    const { rerender } = render(
      <DInputSearch
        label="Search input"
        value="policy"
        debounceMs={300}
        onImmediateChange={handleImmediateChange}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'policy abc' } });

    expect(handleImmediateChange).toHaveBeenCalledWith('policy abc');

    rerender(
      <DInputSearch
        label="Search input"
        value="policy abc"
        debounceMs={300}
        onImmediateChange={handleImmediateChange}
        onChange={handleChange}
      />,
    );

    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).toHaveBeenCalledWith('policy abc');
  });

  it('should emit current value when onChange is provided after initial render', () => {
    const handleChange = jest.fn();

    const { rerender } = render(
      <DInputSearch
        label="Search input"
        value="initial"
        debounceMs={300}
      />,
    );

    // type before onChange is wired
    fireEvent.change(screen.getByLabelText('Search input'), { target: { value: 'typed' } });

    // now wire onChange
    rerender(
      <DInputSearch
        label="Search input"
        value="initial"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).toHaveBeenCalledWith('typed');
  });

  it('should reflect externally updated value without triggering onChange', () => {
    const handleChange = jest.fn();

    const { rerender } = render(
      <DInputSearch
        label="Search input"
        value="initial"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    // parent drives update without any user keystroke
    rerender(
      <DInputSearch
        label="Search input"
        value="server-updated"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    expect(input.value).toBe('server-updated');

    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should initialize uncontrolled input with defaultValue', () => {
    const handleChange = jest.fn();

    render(
      <DInputSearch
        label="Search input"
        defaultValue="prefilled"
        debounceMs={300}
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    expect(input.value).toBe('prefilled');

    // no debounce fires on mount — only on user interaction
    act(() => { jest.advanceTimersByTime(300); });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
