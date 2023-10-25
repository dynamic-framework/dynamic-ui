import type { ReactNode } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & {
  children: ReactNode;
};

export default function DModalBody(
  {
    children,
    className,
    style,
  }: Props,
) {
  return (
    <div
      className={classNames('d-modal-slot modal-body', className)}
      style={style}
    >
      {children}
    </div>
  );
}
