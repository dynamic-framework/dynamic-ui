import classNames from 'classnames';
import ResponsivePagination, { ResponsivePaginationProps } from 'react-responsive-pagination';

export type Props = {
  className?: ResponsivePaginationProps['extraClassName'];
  page: ResponsivePaginationProps['current'];
  onEventPageChange: ResponsivePaginationProps['onPageChange'];
  total: ResponsivePaginationProps['total'];
  previousLabel?: ResponsivePaginationProps['previousLabel'];
  nextLabel?: ResponsivePaginationProps['nextLabel'];
  showArrows?: ResponsivePaginationProps['renderNav'];
  maxWidth?: ResponsivePaginationProps['maxWidth'];
};
export default function DPaginator({
  className,
  nextLabel,
  previousLabel,
  showArrows = true,
  page,
  onEventPageChange,
  ...props
}: Props) {
  return (
    <ResponsivePagination
      extraClassName={classNames('pagination', className)}
      nextClassName={classNames(
        'arrow arrow-next',
        !nextLabel && 'no-label',
      )}
      nextLabel={nextLabel}
      previousClassName={classNames(
        'arrow arrow-prev',
        !previousLabel && 'no-label',
      )}
      previousLabel={previousLabel}
      renderNav={showArrows}
      current={page}
      onPageChange={onEventPageChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
