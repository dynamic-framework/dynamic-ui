/// <reference types="react" />
import { FallbackProps } from 'react-error-boundary';
type Props = {
    resetErrorBoundary: FallbackProps['resetErrorBoundary'];
};
export default function DefaultErrorBoundary({ resetErrorBoundary }: Props): import("react").JSX.Element;
export {};
