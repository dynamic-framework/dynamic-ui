import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DLayoutPane from './components/DLayoutPane';

import type { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps & {
  gap?: string | number;
}>;

function DLayout(
  {
    className,
    style,
    children,
    gap,
    dataAttributes,
  }: Props,
) {
  const gapClass = gap !== undefined ? `gap-${gap}` : undefined;

  return (
    <div
      style={style}
      className={classNames(
        'grid',
        gapClass,
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
