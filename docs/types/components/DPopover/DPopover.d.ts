import type { PropsWithChildren, ReactElement } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    /**
     * Component to render in call to action
     * @param {boolean} open
     * @returns {React.ReactElement}
     */
    renderComponent: (open: boolean) => ReactElement;
    open: boolean;
    setOpen?: (open: boolean) => void;
    adjustContentToRender?: boolean;
}>;
/**
 * @deprecated
 */
export default function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};