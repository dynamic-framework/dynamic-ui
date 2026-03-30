import type { ReactElement, PropsWithChildren } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    renderComponent: (open: boolean) => ReactElement;
    open: boolean;
    setOpen?: (open: boolean) => void;
    adjustContentToRender?: boolean;
}>;
export default function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
