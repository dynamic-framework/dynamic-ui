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
