import classNames from 'classnames';
import ResponsivePagination, { ResponsivePaginationProps } from 'react-responsive-pagination';

export type MPaginatorProps = {
  extraClassName?: ResponsivePaginationProps['extraClassName'];
  current: ResponsivePaginationProps['current'];
  onPageChange: ResponsivePaginationProps['onPageChange'];
  total: ResponsivePaginationProps['total'];
  previousLabel?: ResponsivePaginationProps['previousLabel'];
  nextLabel?: ResponsivePaginationProps['nextLabel'];
  showArrows?: ResponsivePaginationProps['renderNav'];
  maxWidth?: ResponsivePaginationProps['maxWidth'];
};
export default function MPaginator({
  extraClassName,
  nextLabel,
  previousLabel,
  showArrows = true,
  ...props
}:
MPaginatorProps) {
  return (
    <ResponsivePagination
      extraClassName={classNames('m-pagination', extraClassName)}
      nextClassName={classNames(
        'm-arrow m-arrow-next',
        !nextLabel && 'no-label',
      )}
      nextLabel={nextLabel}
      previousClassName={classNames(
        'm-arrow m-arrow-prev',
        !previousLabel && 'no-label',
      )}
      previousLabel={previousLabel}
      renderNav={showArrows}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
