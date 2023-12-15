import type { PropsWithChildren, ReactElement } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    renderComponent: (open: boolean) => ReactElement;
    open: boolean;
    setOpen?: (open: boolean) => void;
    adjustContentToRender?: boolean;
}>;
export default function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};