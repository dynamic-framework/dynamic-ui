import classNames from 'classnames';
import type { ResponsivePaginationProps } from 'react-responsive-pagination';
import ResponsivePagination from 'react-responsive-pagination';

import { DataAttributes } from '../interface';

export type Props = ResponsivePaginationProps & {
  dataAttributes?: DataAttributes;
};

export default function DPaginator(
  {
    navClassName,
    ...props
  }: Props,
) {
  return (
    <ResponsivePagination
      navClassName={classNames('page-item-arrow', navClassName)}
      {...props}
    />
  );
}
