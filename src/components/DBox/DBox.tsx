import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps>;

export default function DBox(
  {
    className,
    style,
    children,
    dataAttributes,
  }: Props,
) {
  return (
    <div
      style={style}
      className={classNames(
        'd-box',
        className,
      )}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}
