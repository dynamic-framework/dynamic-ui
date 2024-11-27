import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps>;

export default function DCardFooter(
  {
    className,
    style,
    children,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'card-footer',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
