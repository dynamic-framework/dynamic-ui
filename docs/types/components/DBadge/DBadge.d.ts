import type { BaseProps } from '../interface';
type Props = BaseProps & {
    text?: string;
    isDot?: boolean;
    theme?: string;
    id?: string;
};
export default function DBadge({ text, isDot, theme, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
