import { useMemo } from 'react';
import classNames from 'classnames';

import type { CSSProperties, PropsWithChildren } from 'react';

import DLayoutPane from './components/DLayoutPane';

import { PREFIX } from '../config';
import { useResponsiveProp, type ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps } from '../interface';

/** A step on the 4px spacing scale, 0 to 30. */
export type DLayoutGap =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;

type Props = PropsWithChildren<BaseProps & {
  /** A spacing step, or a per-breakpoint object: `{ xs: 2, md: 4 }`. */
  gap?: DLayoutGap | ResponsiveProp<DLayoutGap>;
  columns?: number;
  /** @deprecated Pass an object to `gap`: `gap={{ sm: 4 }}`. */
  gapSm?: DLayoutGap;
  /** @deprecated Pass an object to `gap`: `gap={{ md: 4 }}`. */
  gapMd?: DLayoutGap;
  /** @deprecated Pass an object to `gap`: `gap={{ lg: 4 }}`. */
  gapLg?: DLayoutGap;
  /** @deprecated Pass an object to `gap`: `gap={{ xl: 4 }}`. */
  gapXl?: DLayoutGap;
  /** @deprecated Pass an object to `gap`: `gap={{ xxl: 4 }}`. */
  gapXxl?: DLayoutGap;
}>;

/**
 * A CSS Grid container.
 *
 * 2.x leaned on Bootstrap's grid helpers: a `.grid` block reading
 * `--bs-columns`, plus `.gap-{n}` and a `.gap-{breakpoint}-{n}` for every
 * breakpoint. The responsive gap therefore needed six separate props, one per
 * tier, and depended on utility classes being present in the stylesheet.
 *
 * Here the gap is resolved with `useResponsiveProp` — the same mechanism every
 * other responsive prop in the library uses — and written as one custom
 * property. The six `gapSm`..`gapXxl` props still work and fold into the
 * responsive object, so nothing breaks; they are deprecated because
 * `gap={{ sm: 4 }}` says the same thing in one prop.
 */
function DLayout(
  {
    className,
    style,
    children,
    gap,
    columns = 12,
    gapSm,
    gapMd,
    gapLg,
    gapXl,
    gapXxl,
    dataAttributes,
  }: Props,
) {
  const { responsivePropValue } = useResponsiveProp(true);

  const resolvedGap = useMemo(() => {
    // The per-tier props fold into the responsive object so both spellings
    // resolve through one code path.
    const perTier = {
      ...(gapSm !== undefined && { sm: gapSm }),
      ...(gapMd !== undefined && { md: gapMd }),
      ...(gapLg !== undefined && { lg: gapLg }),
      ...(gapXl !== undefined && { xl: gapXl }),
      ...(gapXxl !== undefined && { xxl: gapXxl }),
    };

    const hasPerTier = Object.keys(perTier).length > 0;
    const isResponsive = typeof gap === 'object' && gap !== null;

    // A flat value applies at every width, so it must NOT go through the
    // breakpoint resolver: that would make it depend on a media query
    // matching, which is fragile in a browser and simply false in jsdom.
    if (!hasPerTier && !isResponsive) return gap as DLayoutGap;

    const responsive = isResponsive
      ? { ...gap, ...perTier }
      : { ...(gap !== undefined && { xs: gap }), ...perTier };

    return responsivePropValue(responsive as ResponsiveProp<DLayoutGap>);
  }, [gap, gapSm, gapMd, gapLg, gapXl, gapXxl, responsivePropValue]);

  const gridStyle = useMemo(() => ({
    [`--${PREFIX}layout-columns`]: columns,
    ...(resolvedGap !== undefined && {
      [`--${PREFIX}layout-gap`]: `var(--${PREFIX}size-${resolvedGap})`,
    }),
    ...style,
  } as CSSProperties), [columns, resolvedGap, style]);

  return (
    <div
      style={gridStyle}
      className={classNames('df-layout', className)}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}

export default Object.assign(DLayout, {
  Pane: DLayoutPane,
});
