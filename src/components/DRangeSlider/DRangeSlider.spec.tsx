/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import DRangeSlider from '.';
import type { DRangeSliderValue } from '.';

/**
 * jsdom has no layout, so everything the slider derives from geometry — where a
 * thumb lands under a drag, how wide a bar is — reads as zero and cannot be
 * asserted. What CAN be, and is worth more, is the contract either side of it:
 * the two thumbs are real sliders with real values, they clamp against each
 * other, and the callbacks fire when they should.
 */
const thumbs = () => screen.getAllByRole<HTMLInputElement>('slider');
const low = () => thumbs()[0];
const high = () => thumbs()[1];

/** A drag is an `input` event on the underlying range element. */
const drag = (thumb: HTMLInputElement, to: number) => {
  fireEvent.change(thumb, { target: { value: String(to) } });
};

const grab = (thumb: HTMLInputElement) => fireEvent.pointerDown(thumb);
const release = (thumb: HTMLInputElement) => fireEvent.pointerUp(thumb);

describe('<DRangeSlider />', () => {
  describe('Rendering', () => {
    it('should render two sliders, which is what the element gives for free', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} />);

      expect(thumbs()).toHaveLength(2);
      expect(low()).toHaveValue('20');
      expect(high()).toHaveValue('80');
    });

    it('should carry the bounds and the step onto both thumbs', () => {
      render(<DRangeSlider min={10} max={90} step={5} />);

      thumbs().forEach((thumb) => {
        expect(thumb).toHaveAttribute('min', '10');
        expect(thumb).toHaveAttribute('max', '90');
        expect(thumb).toHaveAttribute('step', '5');
      });
    });

    it('should span the whole range when nothing is given', () => {
      render(<DRangeSlider min={0} max={100} />);

      expect(low()).toHaveValue('0');
      expect(high()).toHaveValue('100');
    });

    it('should publish the ends as custom properties for the fill', () => {
      const { container } = render(<DRangeSlider min={0} max={100} defaultValue={[25, 75]} />);

      expect(container.querySelector('.d-range-slider')).toHaveStyle({
        '--bs-range-slider-low': '25%',
        '--bs-range-slider-high': '75%',
      });
    });
  });

  describe('Clamping', () => {
    /** The thumbs cannot cross: each is clamped against the other. */
    it('should stop the low thumb at the high one', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 50]} />);

      drag(low(), 90);

      expect(low()).toHaveValue('50');
      expect(high()).toHaveValue('50');
    });

    it('should stop the high thumb at the low one', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[40, 80]} />);

      drag(high(), 10);

      expect(high()).toHaveValue('40');
    });

    it('should keep minDistance between them', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} minDistance={30} />);

      drag(low(), 70);

      expect(low()).toHaveValue('50');
      expect(high()).toHaveValue('80');
    });

    /**
     * A pair can arrive reversed or out of bounds — from a URL, from restored
     * state. Rendering it as-is would put a thumb outside its own track.
     */
    it('should straighten a reversed pair', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[80, 20]} />);

      expect(low()).toHaveValue('20');
      expect(high()).toHaveValue('80');
    });

    it('should pull an out-of-bounds pair back inside', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[-50, 500]} />);

      expect(low()).toHaveValue('0');
      expect(high()).toHaveValue('100');
    });
  });

  describe('Callbacks', () => {
    it('should report every move through onChange', () => {
      const onChange = jest.fn();
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} onChange={onChange} />);

      drag(low(), 30);
      drag(low(), 40);

      expect(onChange).toHaveBeenNthCalledWith(1, [30, 80]);
      expect(onChange).toHaveBeenNthCalledWith(2, [40, 80]);
    });

    /**
     * The distinction both callbacks exist for: a filter that refetches on
     * `onChange` sends a request per pixel of drag.
     */
    it('should hold onChangeCommitted until the move is over', () => {
      const onChangeCommitted = jest.fn();
      render(
        <DRangeSlider
          min={0}
          max={100}
          defaultValue={[20, 80]}
          onChangeCommitted={onChangeCommitted}
        />,
      );

      drag(low(), 30);
      drag(low(), 45);
      expect(onChangeCommitted).not.toHaveBeenCalled();

      fireEvent.pointerUp(low());
      expect(onChangeCommitted).toHaveBeenCalledTimes(1);
      expect(onChangeCommitted).toHaveBeenCalledWith([45, 80]);
    });

    it('should commit on key-up too, so the keyboard is not a second-class path', () => {
      const onChangeCommitted = jest.fn();
      render(
        <DRangeSlider
          min={0}
          max={100}
          defaultValue={[20, 80]}
          onChangeCommitted={onChangeCommitted}
        />,
      );

      drag(high(), 60);
      fireEvent.keyUp(high(), { key: 'ArrowLeft' });

      expect(onChangeCommitted).toHaveBeenCalledWith([20, 60]);
    });
  });

  describe('Controlled and uncontrolled', () => {
    it('should follow the consumer when controlled', () => {
      function Controlled() {
        const [range, setRange] = useState<DRangeSliderValue>([10, 90]);
        return (
          <>
            <DRangeSlider min={0} max={100} value={range} onChange={setRange} />
            <button type="button" onClick={() => setRange([40, 60])}>narrow</button>
          </>
        );
      }
      render(<Controlled />);

      fireEvent.click(screen.getByText('narrow'));

      expect(low()).toHaveValue('40');
      expect(high()).toHaveValue('60');
    });

    it('should keep its own state when uncontrolled', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} />);

      drag(low(), 35);

      expect(low()).toHaveValue('35');
    });
  });

  describe('The histogram', () => {
    it('should draw one bar per bucket', () => {
      const { container } = render(
        <DRangeSlider min={0} max={100} histogram={[1, 4, 2, 8, 3]} />,
      );

      expect(container.querySelectorAll('.d-range-slider-bar')).toHaveLength(5);
    });

    /** Heights are relative to the tallest bucket, so the shape is readable. */
    it('should scale the bars against the tallest', () => {
      const { container } = render(<DRangeSlider min={0} max={100} histogram={[2, 8, 4]} />);
      const bars = container.querySelectorAll('.d-range-slider-bar');

      expect(bars[0]).toHaveStyle({ '--bs-range-slider-bar': '0.25' });
      expect(bars[1]).toHaveStyle({ '--bs-range-slider-bar': '1' });
    });

    it('should mark only the buckets inside the selection', () => {
      const { container } = render(
        <DRangeSlider min={0} max={100} defaultValue={[40, 80]} histogram={[1, 1, 1, 1, 1]} />,
      );
      const bars = [...container.querySelectorAll('.d-range-slider-bar')];

      // Buckets sit at 10, 30, 50, 70 and 90 per cent.
      expect(bars.map((bar) => bar.hasAttribute('data-in-range')))
        .toEqual([false, false, true, true, false]);
    });

    it('should render no histogram when none is given', () => {
      const { container } = render(<DRangeSlider min={0} max={100} />);

      expect(container.querySelector('.d-range-slider-histogram')).not.toBeInTheDocument();
    });

    /** An all-zero histogram must not divide by its own peak. */
    it('should survive a histogram of zeros', () => {
      const { container } = render(<DRangeSlider min={0} max={100} histogram={[0, 0, 0]} />);

      expect(container.querySelectorAll('.d-range-slider-bar')).toHaveLength(3);
      expect(container.querySelectorAll('.d-range-slider-bar')[0])
        .toHaveStyle({ '--bs-range-slider-bar': '0' });
    });
  });

  /**
   * Two thumbs on one pixel are one circle, and a circle can only belong to one
   * of them — the high thumb, which is on top. Dragging it down is then a dead
   * gesture, because it is already clamped against the low thumb, and it is the
   * first thing a user tries after closing the range onto a point.
   */
  describe('The collapsed pair', () => {
    const collapse = () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} />);
      grab(low());
      drag(low(), 80);
      release(low());
      expect([low().value, high().value]).toEqual(['80', '80']);
    };

    it('should move the low end when a collapsed pair is dragged downwards', () => {
      collapse();

      grab(high());
      drag(high(), 50);

      expect(low()).toHaveValue('50');
      expect(high()).toHaveValue('80');
    });

    it('should keep the gesture on that end until the pointer is released', () => {
      collapse();

      grab(high());
      drag(high(), 50);
      // Back up past where the pair closed: the gesture still owns the low end,
      // so it follows and stops against the high one rather than pushing it.
      drag(high(), 95);

      expect(low()).toHaveValue('80');
      expect(high()).toHaveValue('80');
    });

    it('should forget the routing once the pointer is released', () => {
      collapse();

      grab(high());
      drag(high(), 50);
      release(high());

      grab(high());
      drag(high(), 95);

      expect(low()).toHaveValue('50');
      expect(high()).toHaveValue('95');
    });

    /** `minDistance` collapses the pair to a gap, not to a point. */
    it('should treat "as close as minDistance allows" as collapsed', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[60, 70]} minDistance={10} />);

      grab(high());
      drag(high(), 40);

      expect(low()).toHaveValue('40');
      expect(high()).toHaveValue('70');
    });

    it('should not reroute a drag that started with the thumbs apart', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[20, 80]} />);

      grab(high());
      drag(high(), 5);

      expect(low()).toHaveValue('20');
      expect(high()).toHaveValue('20');
    });

    /**
     * Only the pointer is ambiguous. On the keyboard each thumb is separately
     * focusable and separately announced, so Arrow-left on the maximum means
     * the maximum — even when it has nowhere left to go.
     */
    it('should not reroute the keyboard', () => {
      collapse();

      fireEvent.keyDown(high(), { key: 'ArrowLeft' });
      drag(high(), 79);

      expect(low()).toHaveValue('80');
      expect(high()).toHaveValue('80');
    });

    /** The case that is stuck in both directions without the rerouting. */
    it('should reopen a range collapsed at the top of the scale', () => {
      render(<DRangeSlider min={0} max={100} defaultValue={[100, 100]} />);

      grab(high());
      drag(high(), 30);

      expect(low()).toHaveValue('30');
      expect(high()).toHaveValue('100');
    });
  });

  describe('Disabled', () => {
    it('should disable both thumbs and mark the group', () => {
      const { container } = render(<DRangeSlider min={0} max={100} disabled />);

      thumbs().forEach((thumb) => expect(thumb).toBeDisabled());
      expect(container.querySelector('.d-range-slider')).toHaveAttribute('data-disabled');
    });
  });
});
