import { PropsWithChildren } from 'react';
import DToastHeader from './components/DToastHeader';
import DToastBody from './components/DToastBody';
import { BaseProps, LiveRegionRole } from '../interface';
type Props = PropsWithChildren<BaseProps & {
    /**
     * `alert` (default) interrupts the screen reader, for critical errors.
     * `status` announces without interrupting, for confirmations and other
     * non-critical messages. `none` renders no live region.
     */
    role?: LiveRegionRole;
}>;
declare function DToast({ children, role, className, style, dataAttributes, }: Props): import("react").JSX.Element;
declare const _default: typeof DToast & {
    Header: typeof DToastHeader;
    Body: typeof DToastBody;
};
export default _default;
