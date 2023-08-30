import type { PropsWithChildren, ReactElement } from 'react';
declare type Props = PropsWithChildren<{
    renderComponent: (isOpen: boolean) => ReactElement;
    isOpen: boolean;
    setEventIsOpen?: (isOpen: boolean) => void;
}>;
export default function DPopover({ children, renderComponent, isOpen, setEventIsOpen, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
