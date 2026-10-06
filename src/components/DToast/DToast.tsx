import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import DToastHeader from './components/DToastHeader';
import DToastBody from './components/DToastBody';
import { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps>;

function DToast(
  {
    children,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  return (
    /*
     * No `role`, no `aria-live`.
     *
     * This carried `role="alert" aria-live="assertive" aria-atomic="true"`,
     * and all three were wrong here:
     *
     * - a live region inserted at the same moment as its content is frequently
     *   not announced at all, because the technology has to be watching the
     *   element before the change happens. The announcement came and went
     *   depending on timing, which is the worst way for an accessibility
     *   feature to behave — it works when you test it and not when it matters;
     * - `assertive` interrupts whatever a screen reader is saying, which a
     *   "Saved" confirmation is not worth. A toast that must interrupt is a
     *   dialog;
     * - with a region per toast, several arriving at once announce over each
     *   other.
     *
     * `DToastRegion` owns the announcement: one region per corner, rendered
     * for the container's lifetime and empty until something arrives.
     *
     * A `DToast` placed in the page by hand, outside a region, is then not
     * announced — correctly. Static markup is not an event.
     */
    <div
      className={classNames('df-toast', className)}
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
