import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DContextProvider, useDContext } from './DContext';

/**
 * `iconMap` is merged onto the defaults, not swapped for them.
 *
 * It used to be a straight replacement, which made the map impossible to
 * extend: adding `play` and `pause` for the carousel's autoplay control broke
 * every caller that had spelled the map out in full — two of them inside this
 * repository — and the next icon would have broken them again.
 *
 * Merging costs nothing. A complete map still wins key for key, and a partial
 * one was never legal before, so no caller can be relying on the holes.
 */
function Probe() {
  const { iconMap } = useDContext();
  return (
    <ul>
      <li data-testid="x">{iconMap.x}</li>
      <li data-testid="play">{iconMap.play}</li>
      <li data-testid="chevronLeft">{iconMap.chevronLeft}</li>
      <li data-testid="alert-danger">{iconMap.alert.danger}</li>
    </ul>
  );
}

describe('DContextProvider iconMap', () => {
  it('fills the untouched keys from the defaults', () => {
    render(
      <DContextProvider iconMap={{ x: 'close_small' }}>
        <Probe />
      </DContextProvider>,
    );

    expect(screen.getByTestId('x')).toHaveTextContent('close_small');
    expect(screen.getByTestId('play')).toHaveTextContent('Play');
    expect(screen.getByTestId('chevronLeft')).toHaveTextContent('ChevronLeft');
  });

  it('leaves a nested group alone when it is not named', () => {
    render(
      <DContextProvider iconMap={{ check: 'verified' }}>
        <Probe />
      </DContextProvider>,
    );

    expect(screen.getByTestId('alert-danger')).toHaveTextContent('AlertTriangle');
  });

  /**
   * The shape that broke: a map written out in full before `play`/`pause`
   * existed. It has to keep working, and the icons it never heard of have to
   * come from the defaults.
   */
  it('accepts a map that predates a newly added icon', () => {
    render(
      <DContextProvider
        iconMap={{
          x: 'close',
          xLg: 'close',
          chevronUp: 'expand_less',
          chevronDown: 'expand_more',
          chevronLeft: 'chevron_left',
          chevronRight: 'chevron_right',
        }}
      >
        <Probe />
      </DContextProvider>,
    );

    expect(screen.getByTestId('chevronLeft')).toHaveTextContent('chevron_left');
    expect(screen.getByTestId('play')).toHaveTextContent('Play');
  });

  it('still lets a complete map win key for key', () => {
    render(
      <DContextProvider iconMap={{ x: 'a', play: 'b', chevronLeft: 'c' }}>
        <Probe />
      </DContextProvider>,
    );

    expect(screen.getByTestId('x')).toHaveTextContent('a');
    expect(screen.getByTestId('play')).toHaveTextContent('b');
    expect(screen.getByTestId('chevronLeft')).toHaveTextContent('c');
  });
});
