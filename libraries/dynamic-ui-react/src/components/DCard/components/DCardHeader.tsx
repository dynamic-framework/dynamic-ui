import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps>;

export default function DCardHeader(
  {
    className,
    style,
    children,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'card-header',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
