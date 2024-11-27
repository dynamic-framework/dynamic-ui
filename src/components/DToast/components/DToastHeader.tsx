import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps>;

export default function DToastHeader({ children, className, style }: Props) {
  return (
    <div
      className={classNames('toast-header', className)}
      style={style}
    >
      {children}
    </div>
  );
}
