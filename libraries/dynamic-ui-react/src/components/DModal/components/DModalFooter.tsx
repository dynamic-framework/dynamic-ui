import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  actionPlacement?: 'start' | 'end' | 'fill' | 'center';
}>;

export default function DModalFooter(
  {
    className,
    style,
    actionPlacement = 'fill',
    children,
  }: Props,
) {
  return (
    <>
      <div className="d-modal-separator" />
      <div
        className={classNames(`modal-footer d-modal-action-${actionPlacement}`, className)}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
