import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import DToastHeader from './components/DToastHeader';
import DToastBody from './components/DToastBody';
import { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps>;

function DToast({
  children,
  className,
  style,
  dataAttributes,
}: Props) {
  return (
    <div
      className={classNames('toast', className)}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={style}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}

export default Object.assign(DToast, {
  Header: DToastHeader,
  Body: DToastBody,
});
