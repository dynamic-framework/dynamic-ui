import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import DToastHeader from './components/DToastHeader';
import DToastBody from './components/DToastBody';
import { BaseProps, LiveRegionRole } from '../interface';

type Props = PropsWithChildren<BaseProps & {
  /**
   * `alert` (default) interrupts the screen reader, for critical errors.
   * `status` announces without interrupting, for confirmations and other
   * non-critical messages. `none` renders no live region.
   */
  role?: LiveRegionRole;
}>;

const LIVE_REGION_ATTRIBUTES = {
  alert: { role: 'alert', 'aria-live': 'assertive', 'aria-atomic': 'true' },
  status: { role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' },
  none: {},
} as const;

function DToast(
  {
    children,
    role = 'alert',
    className,
    style,
    dataAttributes,
  }: Props,
) {
  return (
    <div
      className={classNames('toast', className)}
      {...LIVE_REGION_ATTRIBUTES[role]}
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
