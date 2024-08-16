import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  footerActionPlacement?: 'start' | 'end' | 'fill';
}>;

export default function DOffcanvasFooter(
  {
    footerActionPlacement = 'fill',
    children,
    className,
    style,
  }: Props,
) {
  return (
    <>
      <div className="d-offcanvas-separator" />
      <div
        className={classNames(`d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`, className)}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
