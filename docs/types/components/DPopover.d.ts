import type { PropsWithChildren, ReactElement } from 'react';
type Props = PropsWithChildren<{
    renderComponent: (isOpen: boolean) => ReactElement;
    isOpen: boolean;
    setEventIsOpen?: (isOpen: boolean) => void;
    adjustContentToRender?: boolean;
}>;
export default function DPopover({ children, renderComponent, isOpen, setEventIsOpen, adjustContentToRender, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
