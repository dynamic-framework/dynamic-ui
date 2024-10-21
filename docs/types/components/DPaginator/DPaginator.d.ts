import type { ResponsivePaginationProps } from 'react-responsive-pagination';
import { DataAttributes } from '../interface';
export type Props = Omit<ResponsivePaginationProps, 'current'> & {
    current?: ResponsivePaginationProps['current'];
    /**
     * @deprecated its use is changing, use extraClassName instead, originally
     *  we set className prop to extraClassName from react-responsive-pagination API.
     *
     *  now we are trying to expose the entire API of react-responsive-pagination and
     *  to ensure backward compatibility we are setting the className prop to
     *  extraClassName from react-responsive-pagination only if extraClassName is not present.
     */
    className?: ResponsivePaginationProps['extraClassName'];
    /**
     * @deprecated use current instead, react-responsive-pagination API.
     */
    page?: ResponsivePaginationProps['current'];
    /**
     * @deprecated use renderNav instead, react-responsive-pagination API.
     */
    showArrows?: ResponsivePaginationProps['renderNav'];
    dataAttributes?: DataAttributes;
};
export type ConditionalProps = Props | (Props & {
    current: number;
    page?: undefined;
}) | (Props & {
    page: number;
    current?: undefined;
});
export default function DPaginator({ className, page, current, showArrows, navClassName, ...props }: ConditionalProps): import("react/jsx-runtime").JSX.Element;
