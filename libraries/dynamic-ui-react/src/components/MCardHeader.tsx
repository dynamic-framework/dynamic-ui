import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function MCardHeader({
  className,
  children,
}: Props) {
  return (
    <div
      className={classNames(
        'card-header',
        className,
      )}
    >
      {children}
    </div>
  );
}
