import type { ReactNode } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & {
  children: ReactNode;
};

export default function DOffcanvasBody(
  {
    children,
    className,
    style,
  }: Props,
) {
  return (
    <div
      className={classNames('d-offcanvas-slot offcanvas-body', className)}
      style={style}
    >
      {children}
    </div>
  );
}
