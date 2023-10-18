import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function DCardBody(
  {
    className,
    children,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'card-body',
        className,
      )}
    >
      {children}
    </div>
  );
}
