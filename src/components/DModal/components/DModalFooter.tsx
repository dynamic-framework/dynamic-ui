import { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  actionPlacement?: 'start' | 'end' | 'fill' | 'center';
}>;

export default function DModalFooter(
  {
    className,
    style,
    actionPlacement,
    children,
  }: Props,
) {
  // `d-modal-action-fill` / `-start` were two classes for one axis.
  const dataProps = useMemo(
    () => (actionPlacement ? { 'data-align': actionPlacement } : {}),
    [actionPlacement],
  );

  return (
    <>
      <hr className="df-overlay-separator" />
      <div
        className={classNames('df-overlay-footer', className)}
        style={style}
        {...dataProps}
      >
        {children}
      </div>
    </>
  );
}
