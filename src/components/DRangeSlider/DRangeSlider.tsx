import {
  useCallback,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { CSSProperties } from 'react';

import useControlledState from '../../hooks/useControlledState';

import type { BaseProps } from '../interface';

export type DRangeSliderValue = [number, number];

export type DRangeSliderI18n = {
  /** Names the pair for a screen reader when no `label` is given. */
  group: string;
  minimum: string;
  maximum: string;
};

const DEFAULT_I18N: DRangeSliderI18n = {
  group: 'Range',
  minimum: 'Minimum',
  maximum: 'Maximum',
};

export type Props = BaseProps & {
  /** Lowest selectable value. */
  min?: number;
  /** Highest selectable value. */
  max?: number;
  /** Granularity of a move, by arrow key or by drag. */
  step?: number;
  /** The selected range, as `[low, high]`. Controlled when paired with `onChange`. */
  value?: DRangeSliderValue;
  /** Where an uncontrolled slider starts. Defaults to the whole range. */
  defaultValue?: DRangeSliderValue;
  /**
   * Fires on every move, while the thumb is still being dragged.
   *
   * For the label under the slider, or anything else cheap enough to redraw at
   * pointer rate. Anything that costs — a request, a re-query — belongs in
   * `onChangeCommitted`.
   */
  onChange?: (value: DRangeSliderValue) => void;
  /**
   * Fires once the move is over: the pointer released, or the key let go.
   *
   * The distinction is the whole reason both exist. A price filter that
   * refetches on `onChange` sends a request per pixel of drag.
   */
  onChangeCommitted?: (value: DRangeSliderValue) => void;
  /**
   * How close the two thumbs may get, in value units.
   *
   * Zero lets them meet, which is a legitimate "exactly this value" selection.
   * They can never cross: each thumb is clamped against the other.
   */
  minDistance?: number;
  /**
   * Counts per bucket, drawn as bars behind the track — where the results are.
   *
   * Buckets are spread evenly across `min`..`max`, so the array length decides
   * the resolution and the values decide the heights, relative to the tallest.
   * Bars outside the selection are dimmed rather than hidden, so the shape of
   * the whole distribution stays readable while you narrow it.
   *
   * Numbers rather than elements on purpose: this is data the component draws,
   * not markup it hosts.
   */
  histogram?: number[];
  /**
   * Turns a value into the text a screen reader announces for that thumb, and
   * what any label the consumer draws should show.
   *
   * Without it a price filter announces "420", which is a number and not a
   * price. With it, "$420".
   */
  formatValue?: (value: number) => string;
  /** A visible name for the pair. Also becomes the group's accessible name. */
  label?: string;
  disabled?: boolean;
  i18n?: Partial<DRangeSliderI18n>;
};

/** Where a value sits on the track, 0–1. */
function ratio(value: number, min: number, max: number): number {
  if (max <= min) return 0;
  return (value - min) / (max - min);
}

function clamp(value: number, low: number, high: number): number {
  return Math.min(Math.max(value, low), high);
}

/**
 * A range with two ends: pick a low and a high, rather than typing both.
 *
 * ## Why two native `<input type="range">` and not two divs
 *
 * Everything hard about a slider is already in the element. Each thumb gets
 * arrow keys, Home and End, PageUp and PageDown, touch, pointer capture during
 * a drag, the right behaviour under RTL, and — the part nothing else gives for
 * free — a real `slider` role with `aria-valuenow`, `aria-valuemin` and
 * `aria-valuemax` that assistive technology already knows how to drive.
 *
 * The usual objection is that two inputs cannot overlap without fighting for
 * the pointer. They can: the input is `pointer-events: none` and only its thumb
 * pseudo-element takes them back, so a press lands on whichever thumb is under
 * it and the track below stays inert. That is a stylesheet problem, and a
 * stylesheet problem is a much smaller thing to own than a keyboard
 * implementation.
 *
 * ## The two callbacks
 *
 * `onChange` fires continuously and `onChangeCommitted` fires once. A filter
 * that refetches on the first sends a request per pixel of drag; one that
 * labels itself from the second shows a stale number while you move.
 */
export default function DRangeSlider(
  {
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    onChange,
    onChangeCommitted,
    minDistance = 0,
    histogram,
    formatValue,
    label,
    disabled = false,
    className,
    style,
    dataAttributes,
    i18n: i18nProp,
  }: Props,
) {
  const text = useMemo(() => ({ ...DEFAULT_I18N, ...i18nProp }), [i18nProp]);
  const labelId = useId();

  const [range, setRange] = useControlledState<DRangeSliderValue>(
    value,
    Boolean(value && onChange),
    defaultValue ?? [min, max],
  );

  /*
   * Clamped on the way out, not trusted on the way in.
   *
   * A consumer can hand over a pair that is reversed, out of bounds, or closer
   * together than `minDistance` — from a URL, from restored state, from a
   * sibling input. Rendering that as-is would put a thumb outside its own track.
   */
  const low = clamp(Math.min(range[0], range[1]), min, max);
  const high = clamp(Math.max(range[0], range[1]), min, max);

  const commit = useCallback((next: DRangeSliderValue) => {
    setRange(next);
    onChange?.(next);
  }, [onChange, setRange]);

  /*
   * The last value a move produced.
   *
   * `onChangeCommitted` fires from pointer-up and key-up, which carry no value
   * of their own — and reading state there would read the value from the render
   * that scheduled the event rather than the latest one.
   */
  const latest = useRef<DRangeSliderValue>([low, high]);
  latest.current = [low, high];

  /*
   * Which end a pointer gesture is really moving.
   *
   * When the two thumbs sit on the same pixel every press lands on the high
   * one — it is the one on top — and dragging it downwards does nothing,
   * because it is already clamped against the low thumb. That is precisely the
   * gesture a user reaches for after closing the range onto a point, and a
   * slider that ignores it reads as broken.
   *
   * So a gesture that starts on a collapsed pair and heads downwards is routed
   * to the low end instead, and stays routed until the pointer is released:
   * one drag moves one end of the range, start to finish.
   *
   * Pointer only. On the keyboard the thumbs are separately focusable and
   * separately announced, so a press on the maximum means the maximum, even
   * when it has nowhere to go.
   */
  const collapsedAtGrab = useRef(false);
  const routedToLow = useRef(false);

  const beginPointerGesture = useCallback(() => {
    routedToLow.current = false;
    collapsedAtGrab.current = latest.current[1] - latest.current[0] <= minDistance;
  }, [minDistance]);

  const beginKeyGesture = useCallback(() => {
    routedToLow.current = false;
    collapsedAtGrab.current = false;
  }, []);

  const handleThumb = useCallback((thumb: 'low' | 'high') => (
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const moved = Number(event.target.value);
      const [currentLow, currentHigh] = latest.current;

      /* Each thumb is clamped against the other, so they cannot cross and
       * cannot come closer than `minDistance`. */
      const asLow: DRangeSliderValue = [Math.min(moved, currentHigh - minDistance), currentHigh];

      if (thumb === 'high'
        && (routedToLow.current || (collapsedAtGrab.current && moved < currentLow))) {
        routedToLow.current = true;
        commit(asLow);
        return;
      }

      commit(thumb === 'low'
        ? asLow
        : [currentLow, Math.max(moved, currentLow + minDistance)]);
    }
  ), [commit, minDistance]);

  const handleCommitted = useCallback(() => {
    onChangeCommitted?.(latest.current);
  }, [onChangeCommitted]);

  const lowRatio = ratio(low, min, max);
  const highRatio = ratio(high, min, max);

  const bars = useMemo(() => {
    if (!histogram?.length) return null;
    const peak = Math.max(...histogram, 0);
    return histogram.map((count, index) => {
      /* The bucket's midpoint decides which side of a thumb it falls on. */
      const at = (index + 0.5) / histogram.length;
      return {
        key: `bucket-${index}`,
        height: peak > 0 ? count / peak : 0,
        inRange: at >= lowRatio && at <= highRatio,
      };
    });
  }, [highRatio, histogram, lowRatio]);

  const trackVars = {
    '--bs-range-slider-low': `${lowRatio * 100}%`,
    '--bs-range-slider-high': `${highRatio * 100}%`,
  } as CSSProperties;

  const thumbProps = {
    type: 'range' as const,
    className: 'd-range-slider-thumb',
    min,
    max,
    step,
    disabled,
    onPointerDown: beginPointerGesture,
    onKeyDown: beginKeyGesture,
    onPointerUp: handleCommitted,
    onKeyUp: handleCommitted,
  };

  return (
    <div
      className={classNames('d-range-slider', className)}
      style={{ ...trackVars, ...style }}
      role="group"
      {...label
        ? { 'aria-labelledby': labelId }
        : { 'aria-label': text.group }}
      {...disabled && { 'data-disabled': '' }}
      {...dataAttributes}
    >
      {label && <span className="d-range-slider-label" id={labelId}>{label}</span>}

      <div className="d-range-slider-rail">
        {/*
          * The distribution, hidden from assistive technology.
          *
          * A bar chart read out bar by bar is noise — "3, 7, 12, 9" tells a
          * screen-reader user nothing they can act on, and the thumbs already
          * announce the range they are choosing. Hiding it is the honest
          * answer; a consumer who needs the counts should say them in text.
          */}
        {bars && (
          <div className="d-range-slider-histogram" aria-hidden="true">
            {bars.map(({ key, height, inRange }) => (
              <span
                key={key}
                className="d-range-slider-bar"
                {...inRange && { 'data-in-range': '' }}
                style={{ '--bs-range-slider-bar': height } as CSSProperties}
              />
            ))}
          </div>
        )}

        <div className="d-range-slider-track" aria-hidden="true">
          <div className="d-range-slider-fill" />
        </div>

        {/*
          * Both inputs cover the whole rail, stacked. Only their thumbs take
          * pointer events, so a press lands on a thumb rather than on whichever
          * input happens to be on top.
          */}
        <input
          {...thumbProps}
          data-thumb="low"
          value={low}
          aria-label={text.minimum}
          {...formatValue && { 'aria-valuetext': formatValue(low) }}
          onChange={handleThumb('low')}
        />
        <input
          {...thumbProps}
          data-thumb="high"
          value={high}
          aria-label={text.maximum}
          {...formatValue && { 'aria-valuetext': formatValue(high) }}
          onChange={handleThumb('high')}
        />
      </div>
    </div>
  );
}
