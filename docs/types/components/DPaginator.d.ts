import { ResponsivePaginationProps } from 'react-responsive-pagination';
export declare type Props = {
    className?: ResponsivePaginationProps['extraClassName'];
    page: ResponsivePaginationProps['current'];
    onEventPageChange: ResponsivePaginationProps['onPageChange'];
    total: ResponsivePaginationProps['total'];
    previousLabel?: ResponsivePaginationProps['previousLabel'];
    nextLabel?: ResponsivePaginationProps['nextLabel'];
    showArrows?: ResponsivePaginationProps['renderNav'];
    maxWidth?: ResponsivePaginationProps['maxWidth'];
};
export default function DPaginator({ className, nextLabel, previousLabel, showArrows, page, onEventPageChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
