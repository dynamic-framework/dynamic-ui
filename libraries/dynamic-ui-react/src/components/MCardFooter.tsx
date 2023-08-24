import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function MCardFooter({
  className,
  children,
}: Props) {
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
