import type { ResponsivePaginationProps } from 'react-responsive-pagination';
import { DataAttributes } from '../interface';
export type Props = ResponsivePaginationProps & {
    dataAttributes?: DataAttributes;
};
export default function DPaginator({ navClassName, ...props }: Props): import("react/jsx-runtime").JSX.Element;
