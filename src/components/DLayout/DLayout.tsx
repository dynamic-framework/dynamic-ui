import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DLayoutPane from './components/DLayoutPane';

import type { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps & {
  gap?: string | number;
  gapSm?: string | number;
  gapMd?: string | number;
  gapLg?: string | number;
  gapXl?: string | number;
  gapXxl?: string | number;
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

  return (
    <div
      style={style}
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
