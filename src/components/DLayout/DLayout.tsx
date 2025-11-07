import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DLayoutPane from './components/DLayoutPane';

import type { BaseProps } from '../interface';

/**
 * Define the spacing (gap) on a scale from 0 to 30.
 * @type {number}
 */
type Gap = number;

type Props = PropsWithChildren<BaseProps & {
  gap?: Gap;
  gapSm?: Gap;
  gapMd?: Gap;
  gapLg?: Gap;
  gapXl?: Gap;
  gapXxl?: Gap;
  /**
   * Number of columns in the grid layout (default: 12)
   * Uses CSS variable --bs-columns to configure Bootstrap's grid system
   * @example
   * // Create a 5-column layout
   * <DLayout columns={5}>
   *   <DLayout.Pane cols="1">Col 1</DLayout.Pane>
   *   <DLayout.Pane cols="1">Col 2</DLayout.Pane>
   *   <DLayout.Pane cols="1">Col 3</DLayout.Pane>
   *   <DLayout.Pane cols="1">Col 4</DLayout.Pane>
   *   <DLayout.Pane cols="1">Col 5</DLayout.Pane>
   * </DLayout>
   */
  columns?: number;
}>;

function DLayout(
  {
    className,
    style,
    children,
    gap,
    gapSm,
    gapMd,
    gapLg,
    gapXl,
    gapXxl,
    columns,
    dataAttributes,
  }: Props,
) {
  const gapClasses = classNames({
    [`gap-${gap}`]: gap !== undefined,
    [`gap-sm-${gapSm}`]: gapSm !== undefined,
    [`gap-md-${gapMd}`]: gapMd !== undefined,
    [`gap-lg-${gapLg}`]: gapLg !== undefined,
    [`gap-xl-${gapXl}`]: gapXl !== undefined,
    [`gap-xxl-${gapXxl}`]: gapXxl !== undefined,
  });

  const gridStyle = {
    ...style,
    ...(columns !== undefined && { '--bs-columns': columns } as React.CSSProperties),
  };

  return (
    <div
      style={gridStyle}
      className={classNames(
        'grid',
        gapClasses,
        className,
      )}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}

export default Object.assign(DLayout, {
  Pane: DLayoutPane,
});
