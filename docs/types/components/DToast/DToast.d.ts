import { PropsWithChildren } from 'react';
import DToastHeader from './components/DToastHeader';
import DToastBody from './components/DToastBody';
import { BaseProps } from '../interface';
type Props = PropsWithChildren<BaseProps>;
declare function DToast({ children, className, style }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DToast & {
    Header: typeof DToastHeader;
    Body: typeof DToastBody;
};
export default _default;
