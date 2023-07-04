import type { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
    renderComponent: (isOpen: boolean) => JSX.Element;
    isOpen: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}>;
export default function MPopover({ children, renderComponent, isOpen, setIsOpen, }: Props): JSX.Element;
export {};
