import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import { useTabContext } from '../TabContext';
import { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  tab: string;
}>;

export default function DTabContent(
  {
    tab,
    children,
    className,
    style,
  }: Props,
) {
  const { isSelected } = useTabContext();

  if (!isSelected(tab)) {
    return null;
  }

  return (
    <div
      className={classNames('tab-pane fade show active', className)}
      id={`${tab}Pane`}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`${tab}Tab`}
      style={style}
    >
      {children}
    </div>
  );
}
