import classNames from 'classnames';

import type { CSSProperties, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export default function DCard(
  {
    className,
    style,
    children,
  }: Props,
) {
  return (
    <div
      style={style}
      className={classNames(
        'card',
        className,
      )}
    >
      {children}
    </div>
  );
}
