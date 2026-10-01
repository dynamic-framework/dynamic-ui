import { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  /**
   * Every value the stylesheet supports. The modal's copy of this component
   * accepted `center` and the offcanvas's did not, while the CSS had rules for
   * `center` AND `between` that neither type exposed — three contracts for one
   * element. There is one component now, so there is one list.
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
  // `d-modal-action-fill` / `-start` were two classes for one axis.
  const dataProps = useMemo(
    /*
     * `fill` is a different question from the other four: they choose a
     * `justify-content`, it stretches the children. The stylesheet has always
     * read it as `[data-fill]`, while this emitted `data-align="fill"` — which
     * matches no rule, so the one value that changed the layout rather than the
     * alignment silently did nothing.
     */
    () => {
      if (!actionPlacement) return {};
      return actionPlacement === 'fill'
        ? { 'data-fill': '' }
        : { 'data-align': actionPlacement };
    },
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
