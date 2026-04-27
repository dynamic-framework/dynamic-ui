import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DLayoutPane from './components/DLayoutPane';

import type { BaseProps } from '../interface';

/**
 * Define the spacing (gap) on a scale from 0 to 5 (Bootstrap gap utilities).
 * @type {0 | 1 | 2 | 3 | 4 | 5}
 */
export type DLayoutGap = 0 | 1 | 2 | 3 | 4 | 5;

type Props = PropsWithChildren<BaseProps & {
  gap?: DLayoutGap;
  gapSm?: DLayoutGap;
  gapMd?: DLayoutGap;
  gapLg?: DLayoutGap;
  gapXl?: DLayoutGap;
  gapXxl?: DLayoutGap;
  columns?: number;
}>;

function DLayout(
  {
    className,
    style,
    children,
    gap,
    columns,
    gapSm,
    gapMd,
    gapLg,
    gapXl,
    gapXxl,
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

  const styleWithColumns = {
    ...style,
    '--bs-columns': columns,
  };

  return (
    <div
      style={styleWithColumns}
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
