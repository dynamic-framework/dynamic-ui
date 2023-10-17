import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function DCardFooter(
  {
    className,
    children,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'card-footer',
        className,
      )}
    >
      {children}
    </div>
  );
}
