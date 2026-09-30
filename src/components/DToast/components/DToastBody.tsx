import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps>;

export default function DToastBody({ children, className, style }: Props) {
  return (
    <div
      className={classNames('df-toast-content', className)}
      style={style}
    >
      {children}
    </div>
  );
}
