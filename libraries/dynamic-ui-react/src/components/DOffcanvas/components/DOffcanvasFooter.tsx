import { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  actionPlacement?: 'start' | 'end' | 'fill';
}>;

export default function DOffcanvasFooter(
  {
    actionPlacement,
    children,
    className,
    style,
  }: Props,
) {
  const generateClasses = useMemo(() => ({
    'd-offcanvas-footer': true,
    [`d-offcanvas-action-${actionPlacement}`]: !!actionPlacement,
  }), [actionPlacement]);

  return (
    <>
      <div className="d-offcanvas-separator" />
      <div
        className={classNames(generateClasses, className)}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
