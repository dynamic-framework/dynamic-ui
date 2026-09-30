import { useMemo } from 'react';
import classNames from 'classnames';

import type { CSSProperties, PropsWithChildren } from 'react';

import { PREFIX } from '../../config';
import { useResponsiveProp, type ResponsiveProp } from '../../../hooks/useResponsiveProp';
import type { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps & {
  /** Columns to span, or a per-breakpoint object: `{ xs: 12, md: 6 }`. */
  cols?: string | number | ResponsiveProp<string | number>;
  /** @deprecated Pass an object to `cols`: `cols={{ xs: 12 }}`. */
  colsXs?: string | number;
  /** @deprecated Pass an object to `cols`: `cols={{ sm: 6 }}`. */
  colsSm?: string | number;
  /** @deprecated Pass an object to `cols`: `cols={{ md: 6 }}`. */
  colsMd?: string | number;
  /** @deprecated Pass an object to `cols`: `cols={{ lg: 4 }}`. */
  colsLg?: string | number;
  /** @deprecated Pass an object to `cols`: `cols={{ xl: 3 }}`. */
  colsXl?: string | number;
  /** @deprecated Pass an object to `cols`: `cols={{ xxl: 3 }}`. */
  colsXxl?: string | number;
}>;

/**
 * One cell of a `DLayout` grid.
 *
 * 2.x emitted `.g-col-{n}` and `.g-col-{breakpoint}-{n}` — 12 spans across 6
 * tiers, so 84 class names in the stylesheet whether a page used them or not.
 * The span is a per-instance number, not a design decision, so it belongs in a
 * custom property; the breakpoint is resolved in JavaScript like every other
 * responsive prop in the library.
 */
export default function DLayoutPane(
  {
    className,
    style,
    children,
    cols,
    colsXs,
    colsSm,
    colsMd,
    colsLg,
    colsXl,
    colsXxl,
    dataAttributes,
  }: Props,
) {
  const { responsivePropValue } = useResponsiveProp(true);

  const resolvedCols = useMemo(() => {
    const perTier = {
      ...(colsXs !== undefined && { xs: colsXs }),
      ...(colsSm !== undefined && { sm: colsSm }),
      ...(colsMd !== undefined && { md: colsMd }),
      ...(colsLg !== undefined && { lg: colsLg }),
      ...(colsXl !== undefined && { xl: colsXl }),
      ...(colsXxl !== undefined && { xxl: colsXxl }),
    };

    const hasPerTier = Object.keys(perTier).length > 0;
    const isResponsive = typeof cols === 'object' && cols !== null;

    // A flat value applies at every width, so it must NOT go through the
    // breakpoint resolver: that would make it depend on a media query
    // matching, which is fragile in a browser and simply false in jsdom.
    if (!hasPerTier && !isResponsive) return cols as string | number;

    const responsive = isResponsive
      ? { ...cols, ...perTier }
      : { ...(cols !== undefined && { xs: cols }), ...perTier };

    return responsivePropValue(responsive as ResponsiveProp<string | number>);
  }, [cols, colsXs, colsSm, colsMd, colsLg, colsXl, colsXxl, responsivePropValue]);

  const paneStyle = useMemo(() => ({
    ...(resolvedCols !== undefined && { [`--${PREFIX}layout-pane-span`]: resolvedCols }),
    ...style,
  } as CSSProperties), [resolvedCols, style]);

  return (
    <div
      className={classNames('df-layout-pane', className)}
      style={paneStyle}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}
