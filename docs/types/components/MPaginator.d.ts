import { ResponsivePaginationProps } from 'react-responsive-pagination';
export declare type MPaginatorProps = {
    className?: ResponsivePaginationProps['extraClassName'];
    current: ResponsivePaginationProps['current'];
    onPageChange: ResponsivePaginationProps['onPageChange'];
    total: ResponsivePaginationProps['total'];
    previousLabel?: ResponsivePaginationProps['previousLabel'];
    nextLabel?: ResponsivePaginationProps['nextLabel'];
    showArrows?: ResponsivePaginationProps['renderNav'];
    maxWidth?: ResponsivePaginationProps['maxWidth'];
};
export default function MPaginator({ className, nextLabel, previousLabel, showArrows, ...props }: MPaginatorProps): import("react/jsx-runtime").JSX.Element;
