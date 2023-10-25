import type { PropsWithChildren, ReactElement } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    renderComponent: (isOpen: boolean) => ReactElement;
    isOpen: boolean;
    setEventIsOpen?: (isOpen: boolean) => void;
    adjustContentToRender?: boolean;
}>;
export default function DPopover({ children, renderComponent, isOpen, setEventIsOpen, adjustContentToRender, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
