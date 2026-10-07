import { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  /**
   * Every value the stylesheet supports.
   *
   * The modal's footer accepted `center` and the offcanvas's did not, and
   * neither exposed `between` — three contracts for what is one element and one
   * set of rules. There is one list now, and both footers read from it.
   */
  actionPlacement?: 'start' | 'end' | 'center' | 'between' | 'fill';
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
