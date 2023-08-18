import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function MCardBody({
  className,
  children,
}: Props) {
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
