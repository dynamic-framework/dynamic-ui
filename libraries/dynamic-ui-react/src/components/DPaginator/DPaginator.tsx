import ResponsivePagination from 'react-responsive-pagination';

import type { ResponsivePaginationProps } from 'react-responsive-pagination';
import { DataAttributes } from '../interface';

export type Props = {
  className?: ResponsivePaginationProps['extraClassName'];
  page: ResponsivePaginationProps['current'];
  onPageChange: ResponsivePaginationProps['onPageChange'];
  total: ResponsivePaginationProps['total'];
  previousLabel?: ResponsivePaginationProps['previousLabel'];
  nextLabel?: ResponsivePaginationProps['nextLabel'];
  showArrows?: ResponsivePaginationProps['renderNav'];
  maxWidth?: ResponsivePaginationProps['maxWidth'];
  dataAttributes?: DataAttributes;
};
export default function DPaginator(
  {
    className,
    nextLabel,
    previousLabel,
    showArrows = true,
    page,
    onPageChange,
    ...props
  }: Props,
) {
  return (
    <ResponsivePagination
      extraClassName={className}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      renderNav={showArrows}
      current={page}
      onPageChange={onPageChange}
      {...props}
    />
  );
}
