import type { ResponsivePaginationProps } from 'react-responsive-pagination';
export type Props = {
    className?: ResponsivePaginationProps['extraClassName'];
    page: ResponsivePaginationProps['current'];
    onPageChange: ResponsivePaginationProps['onPageChange'];
    total: ResponsivePaginationProps['total'];
    previousLabel?: ResponsivePaginationProps['previousLabel'];
    nextLabel?: ResponsivePaginationProps['nextLabel'];
    showArrows?: ResponsivePaginationProps['renderNav'];
    maxWidth?: ResponsivePaginationProps['maxWidth'];
};
export default function DPaginator({ className, nextLabel, previousLabel, showArrows, page, onPageChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
