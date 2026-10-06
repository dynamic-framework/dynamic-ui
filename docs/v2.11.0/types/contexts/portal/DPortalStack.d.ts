import type { FC } from 'react';
type Props = {
    stack: Array<{
        name: string;
        Component: FC<{
            name: string;
            payload: any;
        }>;
        payload: unknown;
    }>;
};
export default function DPortalStack({ stack }: Props): import("react").JSX.Element;
export {};
