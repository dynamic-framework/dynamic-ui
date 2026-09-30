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
  const dataProps = useMemo(
    () => (actionPlacement ? { 'data-align': actionPlacement } : {}),
    [actionPlacement],
  );

  return (
    <>
      <hr className="df-overlay-separator" />
      <div
        className={classNames('df-overlay-footer', className)}
        {...dataProps}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
