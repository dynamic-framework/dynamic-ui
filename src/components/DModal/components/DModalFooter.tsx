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
  const generateClasses = useMemo(() => ({
    'modal-footer': true,
    [`d-modal-action-${actionPlacement}`]: !!actionPlacement,
  }), [actionPlacement]);

  return (
    <>
      <div className="d-modal-separator" />
      <div
        className={classNames(generateClasses, className)}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
